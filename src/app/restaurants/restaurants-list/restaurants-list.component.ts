import { Component } from '@angular/core';
import { Restaurant } from 'src/app/shared/logo/models/restaurant.mode';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent {
  restaurants:Restaurant[] = [
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
    {
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
      type: 'New!'
    },
  ]
}
