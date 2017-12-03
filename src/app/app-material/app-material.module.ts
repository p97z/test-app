
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
  MatListModule, MatInputModule, MatCardModule, MatMenuModule, 
  MatProgressSpinnerModule, MatTabsModule
} from '@angular/material';

/**
 * Module used to wrap the material component and modules...
 * This is so we don't have to keep adding stuff to the app.module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatSidenavModule,  MatToolbarModule, MatButtonModule, MatIconModule, 
    MatListModule, MatInputModule, MatCardModule, MatMenuModule, 
    MatProgressSpinnerModule, MatTabsModule
  ],
  declarations: []
})
export class AppMaterialModule { }
