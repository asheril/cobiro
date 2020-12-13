import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamPageResolver } from './application/resolvers/team-page.resolver';

const routes: Routes = [
    {
        path: '',
        component: TeamComponent,
        resolve: { teamPage: TeamPageResolver }
    }
];

@NgModule({
    providers: [TeamPageResolver],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule {}
