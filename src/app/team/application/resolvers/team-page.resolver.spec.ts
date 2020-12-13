import { TestBed } from '@angular/core/testing';
import { TeamPageResolver } from './team-page.resolver';

describe('TeamPageResolver', () => {
    let resolver: TeamPageResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(TeamPageResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
