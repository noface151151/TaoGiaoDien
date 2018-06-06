import { PagesComponent } from './pages.component';
import { OrdersComponent } from './orders/orders.component';
import * as Share from '../share';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    Share.MainNavComponent,
    Share.PageHeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    Share.ShareModule
  ]

})
export class PagesModule {

}
