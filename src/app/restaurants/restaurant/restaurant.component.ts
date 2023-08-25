import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/shared/logo/models/restaurant.mode';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant
}
