import { ImageUrl } from '../../domain/models/image-url';

export interface TeamMember {
    title: string;
    description: string;
    link: string;
    text: string;
    imageUrl: ImageUrl;
}
