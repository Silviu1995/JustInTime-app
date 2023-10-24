import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  description: string;

  constructor() {
    this.description = `Aplicația este construită folosind Angular pentru frontend și NestJS pentru backend.
    Folosim o bază de date PostgreSQL, iar stilizarea este realizată cu SCSS. Procesul de management al stărilor se realizează cu ajutorul NgRx. 
    Pentru partea de autentificare, am implementat JSON Web Tokens (JWT). Datele sunt stocate folosind TypeORM.`;
  }

  ngOnInit(): void {
  }

}
