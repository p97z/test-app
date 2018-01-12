
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
<<<<<<< HEAD
  MatListModule, MatInputModule, MatCardModule, MatMenuModule,
  MatProgressSpinnerModule, MatTabsModule, MatExpansionModule,
  MatStepperModule
=======
  MatListModule, MatInputModule, MatCardModule, MatMenuModule, 
  MatProgressSpinnerModule, MatTabsModule, MatExpansionModule, MatGridListModule
>>>>>>> a39c17735e450c1d2187dcfc5c070a340af3ba7d
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
/**
 * Module used to wrap the material component and modules...
 * This is so we don't have to keep adding stuff to the app.module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
<<<<<<< HEAD
    MatSidenavModule,  MatToolbarModule, MatButtonModule, MatIconModule,
    MatListModule, MatInputModule, MatCardModule, MatMenuModule,
    MatProgressSpinnerModule, MatTabsModule, MatExpansionModule, MatStepperModule
=======
    MatSidenavModule,  MatToolbarModule, MatButtonModule, MatIconModule, 
    MatListModule, MatInputModule, MatCardModule, MatMenuModule, 
    MatProgressSpinnerModule, MatTabsModule, MatExpansionModule, MatGridListModule,
    FlexLayoutModule
>>>>>>> a39c17735e450c1d2187dcfc5c070a340af3ba7d
  ],
  declarations: []
})
export class AppMaterialModule { }
