const domino = require('domino');
const fs = require('fs');
const path = require('path');

// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {renderModuleFactory} from '@angular/platform-server';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from 'path';
import {readFileSync} from 'fs';

// Required for Firebase
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// Faster renders in prod mode
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const APP_NAME = 'ffxiv-teamcraft';

const {AppServerModuleNgFactory} = require(`./dist/${APP_NAME}-server/main`);

// index.html template
const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

const win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;
global['navigator'] = win.navigator;

app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        document: template,
        url: options.req.url,
    }).then(html => {
        callback(null, html);
    });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER));

// Serve static files
app.get('*.*', express.static(join(DIST_FOLDER)));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'index.html'), {req});
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});
