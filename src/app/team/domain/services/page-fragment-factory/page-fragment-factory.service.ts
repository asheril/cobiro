import { Injectable } from '@angular/core';
import { PageFragmentType } from '../../models/page-fragment-type';
import { PageFragmentRepository } from '../../../repository/models/page-fragment-repository';
import { PageFragment } from '../../models/page-fragment';
import { BlockPageFragment } from '../../models/block-page-fragment';
import { BlockRow } from '../../models/block-row';

type BlockPageFragmentAttributes = { title: string } & {
    [key: string]: BlockRow;
};

@Injectable()
export class PageFragmentFactoryService {
    createPageFragment({ id, type, attributes }: PageFragmentRepository): PageFragment {
        if (type === PageFragmentType.BLOCKS) {
            const blockPageFragmentAttributes: BlockPageFragmentAttributes = attributes as BlockPageFragmentAttributes;
            const blockPageFragment: BlockPageFragment = new BlockPageFragment(id, blockPageFragmentAttributes.title);

            blockPageFragment.addBlockRows(
                Object.keys(attributes)
                    .filter(key => key !== 'title')
                    .map(key => attributes[key])
            );

            return blockPageFragment;
        }

        throw new Error('page fragment type not supported');
    }
}
