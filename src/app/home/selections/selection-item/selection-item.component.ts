import { Component, Input } from '@angular/core';
import { Selection } from 'src/app/shared/logo/models/selection.model';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent {
  @Input() selection: Selection
}
