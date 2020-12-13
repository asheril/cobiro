import { TestBed } from '@angular/core/testing';

import { TeamPageService } from './team-page.service';

describe('TeamPageService', () => {
    let service: TeamPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TeamPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
