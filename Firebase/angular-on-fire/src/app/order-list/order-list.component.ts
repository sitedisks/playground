import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  coffeeOrders;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () => {
    this.ordersService.getCoffeeOrders()
      .subscribe(res => {
        this.coffeeOrders = res;
        console.log(this.coffeeOrders);
      });
  }

  markCompleted(data) {
    console.log('update');
    this.ordersService.updateCoffeeOrder(data);
  }

  deleteOrder(data){
    console.log('delete');
    this.ordersService.deleteCoffeeOrder(data);
  }

}
