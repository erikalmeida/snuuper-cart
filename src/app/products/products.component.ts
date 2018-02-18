import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: "app-products",
  inputs: ["list"],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  trackProduct(index, product) {
    return product ? product.id : undefined;
  }
}
