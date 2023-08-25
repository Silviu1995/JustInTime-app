import { Component, Input } from '@angular/core';
import { Brand } from 'src/app/shared/logo/models/brand.model';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss']
})
export class BrandItemComponent {
  @Input() brand: Brand
}
