import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamPageService } from '../services/team-page/team-page.service';
import { TeamPage } from '../models/team-page';

@Injectable()
export class TeamPageResolver implements Resolve<TeamPage> {
    constructor(private readonly teamPageService: TeamPageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeamPage> {
        return this.teamPageService.teamPage();
    }
}
