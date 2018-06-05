import { PagesRoutingModule } from './../pages/pages-routing.module';
import { SharedModule } from './../share/share.module';
import { MainNavComponent } from '../core/component/main-nav/main-nav.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    MainNavComponent
  ],
  providers: [

  ]

})
export class CoreModule { }
