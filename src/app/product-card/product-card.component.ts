import { Component, OnInit, Inject, Input } from "@angular/core";
import { Product } from "../models/product";
import { Item } from "../models/item";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CartItemDialogComponent } from "../cart-item-dialog/cart-item-dialog.component";
import { filter } from "rxjs/operators";
import { Globals } from "../models/globalCart";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  cartItemDialogRef: MatDialogRef<CartItemDialogComponent>;

  constructor(public dialog: MatDialog, private globals: Globals) {}

  @Input() item: Product;
  newItem: Item;
  ngOnInit() {}

  openDialog(product?): void {
    this.cartItemDialogRef = this.dialog.open(CartItemDialogComponent, {
      data: {
        name: product ? product.name : ""
      }
    });

    this.cartItemDialogRef
      .afterClosed()
      .pipe(filter(quantity => quantity))
      .subscribe(quantity => {
        if (quantity != undefined) {
          var nQuantity = +quantity;
          if(this.globals.cart != undefined){
          var elementPos = this.globals.cart
            .map(function(x) {
              return x.id;
            })
            .indexOf(product.id);

          if (elementPos !== -1) {
            var num = +this.globals.cart[elementPos].quantity;
            
            this.globals.cart[elementPos].quantity = (num + nQuantity);
            console.log(this.globals.cart);
          } else {
            this.newItem = {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: nQuantity 
            };
            this.globals.cart.push(this.newItem);
            console.log(this.globals.cart);
          }
        }else{
          this.newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: nQuantity
          };
          this.globals.cart.push(this.newItem);
          console.log(this.globals.cart);
        }
      }
      });
    
  }
}
