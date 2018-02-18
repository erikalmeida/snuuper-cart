import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Globals } from "./models/globalCart";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ProductsComponent } from "./products/products.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductTabComponent } from "./product-tab/product-tab.component";
import { ProductService } from "./service/product.service";
import { CartService } from "./service/cart.service";
import { AppRoutingModule } from ".//app-routing.module";
import { CartItemDialogComponent } from "./cart-item-dialog/cart-item-dialog.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductTabComponent,
    CartItemDialogComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  entryComponents: [CartItemDialogComponent],
  providers: [ProductService, Globals, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
