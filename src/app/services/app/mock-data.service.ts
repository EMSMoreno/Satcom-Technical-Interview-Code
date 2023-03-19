import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/app/product';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/app/customer.ts';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private mockDataNumber = 30;

  elements = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Customer 1' },
    { id: 3, name: 'Product 2' },
    { id: 4, name: 'Customer 2' },
    { id: 5, name: 'Product 3' },
    { id: 6, name: 'Customer 3' },
  ];
  constructor() {}

  getElements() {
    return this.elements;
  }

  getData(): Observable<(Product | Customer)[]> {
    const data = [];

    for (let i = 0; i < this.mockDataNumber; i++) {
      data.push(
        Math.random() > 0.5
          ? this.createRandomProduct(i)
          : this.createRandomCustomer(i)
      );
    }

    return of(data);
  }

  private createRandomProduct(index: number): Product {
    return {
      name: `Product-${index}`,
      productNumber: `${index}`,
      price: Math.random() * 30,
      premium: Math.random() > 0.5,
    };
  }

  private createRandomCustomer(index: number): Customer {
    return {
      name: `Customer-${index}`,
      birthDate: new Date(Math.floor(Math.random() * Date.now())),
    };
  }
}
