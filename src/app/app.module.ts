import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    HomeComponent,
    ProductComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    [
      BrowserAnimationsModule,
      BsDropdownModule.forRoot()
    ],
    RouterModule.forRoot([
{path: '', component: HomeComponent},
{path: 'product', component: ProductComponent},
{path: 'shopping-cart', component: ShoppingCartComponent},
{path: 'check-out', component: CheckOutComponent},
{path: 'order-success', component: OrderSuccessComponent},
{path: 'login', component: LoginComponent},
{path: 'my/orders', component: MyOrdersComponent},
{path: 'admin/products', component: AdminProductsComponent},
{path: 'admin/orders', component: AdminOrdersComponent}
]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
