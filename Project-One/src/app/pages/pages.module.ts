import { CoreModule } from './../core/core.module';
import { PagesComponent } from './pages.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from './../share/share.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        // DashboardComponent,
        // PagesComponent,
        // OrdersComponent,
        // ProductsComponent,
        // UsersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        CoreModule
    ],

})
export class PagesModule {

}
