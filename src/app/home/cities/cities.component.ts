import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
 cities: string[] = [
  'Timisoara',
  'Bucuresti',
  'Cluj-Napoca',
  'Iasi',
  'Sibiu',
  'Oradea',
  'Craiova',
  'Alba Iulia',
  'Pitesti',
  'Constanta'
 ]
}
