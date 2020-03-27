import { Component, OnInit } from '@angular/core';
import { DealersService } from '../services/dealers.service';
import { Dealer} from '../model/dealer';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {

  cars = [
    { 'id': '1', 'name': 'BMW' },
    { 'id': '2', 'name': 'Force Moters' },
    { 'id': '3', 'name': 'Audi' }
  ];

  tab = '1';

  dealers: Dealer[] = [];

  constructor(private _dealerService: DealersService) { }

  ngOnInit(): void {
  }

  findAuto() {
    console.log("Method findAuto has been called");
    return 'find auto';
  }

  findDealers(){
    this.dealers = this._dealerService.getDealers();
    return this.dealers;
  }
}
