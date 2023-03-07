import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomePageComponent } from './Pages/login/homepage.component';
import { VendorDashboardComponent } from './Pages/vendor-dashboard/vendor-dashboard.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { FoodMenuComponent } from './Pages/food-menu/food-menu.component';
import { OrderConfirmationComponent } from './Pages/order-confirmation/order-confirmation.component';
import { FeedbackComponent } from './Pages/feedback/feedback.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    RegisterComponent,
    LoginComponent,
    VendorDashboardComponent,
    UserDashboardComponent,
    ShoppingCartComponent,
    ForgotPasswordComponent,
    FoodMenuComponent,
    OrderConfirmationComponent,
    FeedbackComponent,
    HeaderComponent, 
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
