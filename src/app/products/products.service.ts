import { Injectable } from '@angular/core';
import { Product } from '../shared/logo/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Product[] = [
    new Product(
      'shit',
      5,
      'https://i.stack.imgur.com/XGFw7m.jpg',
      'A short description of the shit'
    ),
    new Product(
      'shit',
      5,
      'https://upload.wikimedia.org/wikipedia/commons/3/38/20200719_180910_Suduch_Pizza%2C_Pizzeria_Yoav_Tel_Aviv_anagoria.jpg',
      'A short description of the shit'
    )
    
  ]

  getProducts() {
    return this.products.slice()
  }
}
