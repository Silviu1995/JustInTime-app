import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoComponent } from './shared/logo/logo.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { OportunitiesComponent } from './home/oportunities/oportunities.component';
import { SelectionsComponent } from './home/selections/selections.component';
import { SelectionItemComponent } from './home/selections/selection-item/selection-item.component';
import { CitiesComponent } from './home/cities/cities.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrandsComponent } from './home/brands/brands.component';
import { BrandItemComponent } from './home/brands/brand-item/brand-item.component';
import { LocationModalComponent } from './home/location-modal/location-modal.component';
import { OrdersHistoryComponent } from './profile/orders-history/orders-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './shared/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RestaurantsComponent,
    ShoppingCartComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoComponent,
    HomeComponent,
    ProductsListComponent,
    RestaurantsListComponent,
    RestaurantComponent,
    OportunitiesComponent,
    SelectionsComponent,
    SelectionItemComponent,
    CitiesComponent,
    FooterComponent,
    BrandsComponent,
    BrandItemComponent,
    LocationModalComponent,
    OrdersHistoryComponent,
    InputComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
