import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from '../../../domain/services/page/page.service';
import { map } from 'rxjs/operators';
import { BlockPageFragment } from '../../../domain/models/block-page-fragment';
import { ImageUrl } from '../../../domain/models/image-url';
import { TeamPage } from '../../models/team-page';
import { TeamMember } from '../../models/team-member';

const url: string = 'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';

@Injectable()
export class TeamPageService {
    constructor(private readonly pageService: PageService) {}

    teamPage(): Observable<TeamPage> {
        return this.pageService.getPage(url).pipe(
            map(page => ({
                teams: page.fragments.map((fragment: BlockPageFragment) => ({
                    title: fragment.title,
                    teamMembers: fragment.blocks.map(({ imageUrl, block }: { imageUrl: ImageUrl; block: TeamMember }) => ({
                        imageUrl,
                        ...block
                    }))
                }))
            }))
        );
    }
}
