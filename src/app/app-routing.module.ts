import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductTabComponent }      from '../app/product-tab/product-tab.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';


const routes: Routes = [
  { path: 'dashboard', component: ProductTabComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail', component: CartDetailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}
