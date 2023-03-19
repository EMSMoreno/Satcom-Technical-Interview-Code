import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

import { debounceTime, takeUntil } from 'rxjs/operators';
import { MockDataService } from 'src/app/services/app/mock-data.service.spec';
import { Product } from 'src/app/models/app/product';
import { Customer } from 'src/app/models/app/customer.ts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  elements: (Product | Customer)[] = [];
  filteredElements: (Product | Customer)[] = [];

  filterForm = new FormControl('');
  private unsubscribe$ = new Subject<void>();

  private subscription: Subscription = new Subscription();

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mockDataService
      .getData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.elements = data;
        this.filteredElements = data;
      });

    this.filterForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if (value) {
          this.filteredElements = this.elements.filter((element) =>
            element.name.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          this.filteredElements = this.elements;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
