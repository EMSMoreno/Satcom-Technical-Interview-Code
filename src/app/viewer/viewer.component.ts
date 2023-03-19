import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerComponent } from '../components/customer/customer.component';
import { PremiumProductComponent } from '../components/premium-product/premium-product.component';
import { ProductComponent } from '../components/product/product.component';
import { DynamicComponentsMapperUtils } from '../utils/app/dynamic-components-mapper';
import { Customer } from '../models/app/customer.ts';
import { Product } from '../models/app/product';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  currentComponent:
    | ComponentRef<
        CustomerComponent | PremiumProductComponent | ProductComponent
      >
    | undefined;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.currentComponent = undefined;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addDetailsComponentToView(element: Customer | Product): void {
    if (this.currentComponent != null) {
      this.currentComponent.destroy();
    }
    const component = DynamicComponentsMapperUtils.getComponent(element);
    this.currentComponent = this.viewContainerRef.createComponent(component);
    this.currentComponent.instance.element = element;
    this.viewContainerRef.insert(this.currentComponent.hostView);
  }
}
