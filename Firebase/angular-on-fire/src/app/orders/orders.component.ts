import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // In theory this should setup inside the Firestore database

  coffees = ["Americano", "Flat White", "Cappuccino", "Latte",
    "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

  coffeeOrder = [];

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  addCoffee(coffee) {
    this.coffeeOrder.push(coffee);
  }

  removecoffee(coffee) {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1)
      this.coffeeOrder.splice(index, 1);
  }

  onSubmit() {
    console.log('Submit');
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data)
      .then(res => { 
        // clear the form or give a success message
        console.log(data);
      });
  }

}
