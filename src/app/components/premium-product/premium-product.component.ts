import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app/product';

@Component({
  selector: 'app-premium-product',
  templateUrl: './premium-product.component.html',
  styleUrls: ['./premium-product.component.scss'],
})
export class PremiumProductComponent implements OnInit {
  element!: Product;

  constructor() {}

  ngOnInit(): void {}
}
