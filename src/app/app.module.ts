import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { CatsComponent } from './components/cats/cats.component';
import { DairyComponent } from './components/dairy/dairy.component';
import { ToysComponent } from './components/toys/toys.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CatsComponent,
    AboutComponent,
    DairyComponent,
    ToysComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
