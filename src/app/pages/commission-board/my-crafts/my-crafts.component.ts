import {Component} from '@angular/core';
import {Observable} from 'rxjs/index';
import {UserService} from '../../../core/database/user.service';
import {map, mergeMap} from 'rxjs/operators';
import {CommissionService} from '../../../core/database/commission/commission.service';
import {Commission} from '../../../model/commission/commission';
import {CommissionStatus} from '../../../model/commission/commission-status';

@Component({
    selector: 'app-my-crafts',
    templateUrl: './my-crafts.component.html',
    styleUrls: ['./my-crafts.component.scss']
})
export class MyCraftsComponent {

    public commissions$: Observable<Commission[]>;

    constructor(private commissionService: CommissionService, private userService: UserService) {
        this.commissions$ = this.userService.getCharacter()
            .pipe(
                mergeMap(character => {
                    return this.commissionService.getAll(character.server, ref => ref.where('crafterId', '==', character.userId))
                        .pipe(
                            map(commissions => commissions.filter(com => com.status !== CommissionStatus.DONE))
                        );
                })
            );
    }

    trackByCommissionFn(index: number, commission: Commission): string {
        return commission.$key;
    }

}
