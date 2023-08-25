import { Component } from '@angular/core';
import { Brand } from 'src/app/shared/logo/models/brand.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  brands : Brand[] = [
    {
      title:'KFC',
      image:'https://images.pexels.com/photos/7832983/pexels-photo-7832983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title:'Spartan',
      image:'https://tazzcdn.akamaized.net/uploads/cover/cvr_spartan_13.jpg'
    },
    {
      title:"McDonald's",
      image:'https://images.pexels.com/photos/4109272/pexels-photo-4109272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title:'Starbucks',
      image:'https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title:'Profi',
      image:'https://www.afaceri.news/media/2021/03/Primul-City-Monaco-Timisoara2-1513x1008.jpeg'
    },
  ]
}
