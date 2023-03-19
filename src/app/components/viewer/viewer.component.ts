import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerComponent } from '../customer/customer.component';
import { PremiumProductComponent } from '../premium-product/premium-product.component';
import { ProductComponent } from '../product/product.component';
import { Customer } from 'src/app/models/app/customer.ts';
import { Product } from 'src/app/models/app/product';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  currentComponent!: ComponentRef<
    CustomerComponent | PremiumProductComponent | ProductComponent
  >;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addDetailsComponentToView(element: Customer | Product): void {
    if (this.currentComponent != null) {
      this.currentComponent.destroy();
    }

    this.currentComponent.instance.element = element;
    this.viewContainerRef.insert(this.currentComponent.hostView);
  }
}
