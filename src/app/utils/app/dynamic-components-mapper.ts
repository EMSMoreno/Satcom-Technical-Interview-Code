import { Component, ComponentRef, Type } from '@angular/core';
import { Product } from 'src/app/models/app/product';
import { Customer } from 'src/app/models/app/customer.ts';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { PremiumProductComponent } from 'src/app/components/premium-product/premium-product.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { ReflexionUtils } from './reflexion.utils.ts';

export class DynamicComponentsMapperUtils {
  static getComponent(
    element: Customer | Product
  ): Type<CustomerComponent | PremiumProductComponent | ProductComponent> {
    if (ReflexionUtils.isCustomer(element)) {
      return CustomerComponent;
    }

    if (element.premium) {
      return PremiumProductComponent;
    } else {
      return ProductComponent;
    }
  }
}
