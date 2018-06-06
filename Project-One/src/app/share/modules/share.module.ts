
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({

  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ShareModule {

}
