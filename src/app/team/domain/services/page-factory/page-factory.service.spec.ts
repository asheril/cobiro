import { TestBed } from '@angular/core/testing';

import { PageFactoryService } from './page-factory.service';

describe('PageFactoryService', () => {
    let service: PageFactoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PageFactoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
