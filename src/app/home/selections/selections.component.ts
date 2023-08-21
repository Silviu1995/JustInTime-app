import { Component } from '@angular/core';
import { Selection } from 'src/app/shared/logo/models/selection.model';
@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss']
})
export class SelectionsComponent {
  selections: Selection[] = [
    {
      title:'Burgers',
      image: '../../../assets/burger.jpeg',
      description:'Tasty Black Anus burgers selection'
    },
    {
      title:'Pizza',
      image: '../../../assets/pizza.webp',
      description:'Tasty Black Anus burgers selection'
    },
    {
      title:'Noodles',
      image: '../../../assets/noodles.jpeg',
      description:'Tasty Black Anus burgers selection'
    },
    {
      title:'Chicken',
      image: '../../../assets/chickne.webp',
      description:'Tasty Black Anus burgers selection'
    },
    {
      title:'Pasta',
      image: '../../../assets/pasta.jpeg',
      description:'Tasty Black Anus burgers selection'
    },
    {
      title:'Steak',
      image: '../../../assets/steak.jpeg',
      description:'Tasty Black Anus burgers selection'
    },
  ]


}
