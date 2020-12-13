import { ImageUrl } from './image-url';

export interface BlockItem {
    imageUrl?: ImageUrl;
    block: {
        [key: string]: any;
    };
}
