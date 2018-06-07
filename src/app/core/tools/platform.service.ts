import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

export const IS_ELECTRON = environment.electron;

@Injectable()
export class PlatformService {

    public isDesktop(): boolean {
        return IS_ELECTRON;
    }
}
