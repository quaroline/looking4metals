import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { JsonReader } from 'src/app/utils/json-reader';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];

  constructor() {
    this.products = JsonReader.getProducts();
  }
}