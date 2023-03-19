import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  element!: Product;

  constructor() {}

  ngOnInit(): void {}
}
