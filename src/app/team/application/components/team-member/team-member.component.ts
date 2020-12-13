import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TeamMember } from '../../models/team-member';

@Component({
    selector: 'app-team-member',
    templateUrl: './team-member.component.html',
    styleUrls: ['./team-member.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberComponent {
    @Input() teamMember: TeamMember;
}
