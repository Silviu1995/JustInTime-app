import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  restaurant = {
    title: 'Clatitaria Bonateli',
    imgUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Str mircea voda, nr. 50',
    specific: [
      'Frantuzesc',
      'Clatite',
      'Desert',
      'Dulce',
      'De sezon'
    ],
    rating: 4.5,
    type: 'Featured'
  }
}
