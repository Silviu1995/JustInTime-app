import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/logo/models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[]
  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.prodService.getProducts()
    console.log(this.products)
  }
}
