import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule }  from '@angular/material';



@NgModule({
    declarations: [
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    imports: [
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
    ],
})
export class SharedModule { }
