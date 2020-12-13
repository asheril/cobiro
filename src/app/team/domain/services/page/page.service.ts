import { Injectable } from '@angular/core';
import { PageRepositoryService } from '../../../repository/services/page-repository/page-repository.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';

@Injectable()
export class PageService {
    constructor(private readonly pageRepositoryService: PageRepositoryService) {}

    getPage(url: string): Observable<Page> {
        return this.pageRepositoryService.getPage(url);
    }
}
