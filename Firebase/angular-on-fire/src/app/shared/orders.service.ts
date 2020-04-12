import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    complete: new FormControl(false),
  });
}
