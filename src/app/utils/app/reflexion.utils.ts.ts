import { Customer } from 'src/app/models/app/customer.ts';
import { Product } from 'src/app/models/app/product';

export class ReflexionUtils {
  static isCustomer(element: Customer | Product): element is Customer {
    return 'birthDate' in element;
  }

  static isProduct(element: Customer | Product): element is Product {
    return 'price' in element;
  }
}
