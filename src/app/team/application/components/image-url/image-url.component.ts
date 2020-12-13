import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageUrl } from '../../../domain/models/image-url';

@Component({
    selector: 'app-image-url',
    templateUrl: './image-url.component.html',
    styleUrls: ['./image-url.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUrlComponent {
    @Input() imageUrl: ImageUrl;
    @Input() alt: string;
}
