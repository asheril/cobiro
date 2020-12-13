import { PageFragment } from './page-fragment';
import { BlockRow } from './block-row';
import { BlockItem } from './block-item';

export class BlockPageFragment extends PageFragment {
    private blockRows: BlockRow[] = [];

    constructor(id: string, public title: string) {
        super(id);
    }

    get blocks(): BlockItem[] {
        return this.blockRows.flatMap(blockRow => [blockRow.first, blockRow.second, blockRow.third]);
    }

    addBlockRows(blockRows: BlockRow[]): void {
        this.blockRows = [...this.blockRows, ...blockRows];
    }
}
