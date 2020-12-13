import { PageFragment } from './page-fragment';

export class Page {
    constructor(private readonly pageFragments: PageFragment[]) {}

    get fragments(): PageFragment[] {
        return this.pageFragments;
    }
}
