import { Component, OnInit } from "@angular/core";
import { ProductService } from "../service/product.service";
import { Product } from "../models/product";
import { Router } from "@angular/router";
import { CartService } from "../service/cart.service";
import { Globals } from "../models/globalCart";
import { Item } from "../models/item";

@Component({
  selector: "app-product-tab",
  templateUrl: "./product-tab.component.html",
  styleUrls: ["./product-tab.component.css"],
})
export class ProductTabComponent implements OnInit {
  electronics: Product[];
  movies: Product[];
  videogames: Product[];
  selectedIndex = 0;
  theCart: Item[];
  name:any;
  counter = 0;

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  constructor(
    private productService: ProductService, 
    private router: Router,
    private cartService: CartService,
    private global : Globals) {
      this.theCart = this.global.cart;
      
    }

  ngOnInit() {
    this.getElectronics();
    this.getMovies();
    this.getVideoGames();
  }
  showTotal() {
    this.theCart = this.global.cart;
    this.cartService.changeMessage(this.theCart)
    this.router.navigate(['./detail']);
  }

  getElectronics(): void {
    this.productService
      .getElectronics()
      .subscribe(electronics => (this.electronics = electronics));
  }
  getVideoGames(): void {
    this.productService
      .getVideoGames()
      .subscribe(videogames => (this.videogames = videogames));
  }
  getMovies(): void {
    this.productService.getMovies().subscribe(movies => (this.movies = movies));
  }
}
