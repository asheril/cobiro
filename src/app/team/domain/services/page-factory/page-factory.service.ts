import { Injectable } from '@angular/core';
import { Page } from '../../models/page';
import { PageRepository } from '../../../repository/models/page-repository';
import { PageFragmentFactoryService } from '../page-fragment-factory/page-fragment-factory.service';

@Injectable()
export class PageFactoryService {
    constructor(private readonly pageFragmentFactoryService: PageFragmentFactoryService) {}

    createPage(pageRepository: PageRepository): Page {
        return new Page(
            pageRepository.map(pageFragmentRepository => this.pageFragmentFactoryService.createPageFragment(pageFragmentRepository))
        );
    }
}
