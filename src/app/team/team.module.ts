import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './application/components/team-list/team-list.component';
import { PageRepositoryService } from './repository/services/page-repository/page-repository.service';
import { PageFactoryService } from './domain/services/page-factory/page-factory.service';
import { PageFragmentFactoryService } from './domain/services/page-fragment-factory/page-fragment-factory.service';
import { PageService } from './domain/services/page/page.service';
import { TeamPageService } from './application/services/team-page/team-page.service';
import { TeamMemberComponent } from './application/components/team-member/team-member.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageUrlComponent } from './application/components/image-url/image-url.component';

@NgModule({
    declarations: [TeamComponent, TeamListComponent, TeamMemberComponent, ImageUrlComponent],
    providers: [PageRepositoryService, PageFactoryService, PageFragmentFactoryService, PageService, TeamPageService],
    imports: [CommonModule, HttpClientModule, TeamRoutingModule]
})
export class TeamModule {}
