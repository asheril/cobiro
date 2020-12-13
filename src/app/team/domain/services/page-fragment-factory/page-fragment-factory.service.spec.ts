import { TestBed } from '@angular/core/testing';

import { PageFragmentFactoryService } from './page-fragment-factory.service';

describe('PageFragmentFactoryService', () => {
    let service: PageFragmentFactoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PageFragmentFactoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
