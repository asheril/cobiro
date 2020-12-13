import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../../domain/models/page';
import { PageRepository } from '../../models/page-repository';
import { PageFactoryService } from '../../../domain/services/page-factory/page-factory.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PageRepositoryService {
    constructor(private readonly httpClient: HttpClient, private readonly pageFactoryService: PageFactoryService) {}

    getPage(url: string): Observable<Page> {
        return this.httpClient
            .get<{ data: PageRepository }>(url)
            .pipe(map(({ data: pageRepository }) => this.pageFactoryService.createPage(pageRepository)));
    }
}
