import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    @Input() team: Team;
}
