import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { TeamPage } from './application/models/team-page';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
    readonly teamPage$: Observable<TeamPage> = this.activatedRoute.data.pipe(pluck('teamPage'));

    constructor(private readonly activatedRoute: ActivatedRoute) {}
}
