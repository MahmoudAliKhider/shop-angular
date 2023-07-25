import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './sharde/matrial.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltterComponent } from './pages/home/components/filtter/filtter.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/card.service';
import { StoreService } from './services/store.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltterComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
