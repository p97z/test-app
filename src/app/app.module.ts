import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppMaterialModule } from '../app/app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { HeaderComponent } from './header/header.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Step1Component } from './step1/step1.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Step1Component
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppMaterialModule, AppRoutingModule, DragulaModule, FormsModule, ReactiveFormsModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
