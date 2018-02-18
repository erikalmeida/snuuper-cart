import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {Globals} from '../models/globalCart';
import { Item } from '../models/item';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  
  thecart: Item[];
  total: number = 0;
  
  constructor(
    private globals: Globals,
    private cartService: CartService,
    private router: Router,
  ) {
    this.getCart();
    console.log(this.thecart)
    var ELEMENT_DATA: Item[] = this.globals.cart;
    
   }

  ngOnInit() {
    this.getCart();
    this.dataSource.data = this.thecart;

    this.thecart.forEach(element => {
      this.total = this.total +(element.price * element.quantity)
    });

  }

  
   displayedColumns = ['id', 'name', 'price', 'quantity', 'total'];
   dataSource = new MatTableDataSource();
  
   
  goBack(){
    this.router.navigate(['./dashboard']);
  }

  clear(){
    this.globals.cart = [];
    this.router.navigate(['./dashboard']);
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.getCart();
   this.dataSource.sort = this.sort;
  }

  getCart(): void {
    this.cartService.currentMessage.subscribe(message => this.thecart = message)
  }
  
}



