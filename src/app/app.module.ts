import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { VendorDashboardComponent } from './Pages/vendor-dashboard/vendor-dashboard.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { ShoppingCartComponent } from './Pages/shopping-cart/shopping-cart.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { FoodMenuComponent } from './Pages/food-menu/food-menu.component';
import { OrderConfirmationComponent } from './Pages/order-confirmation/order-confirmation.component';
import { FeedbackComponent } from './Pages/feedback/feedback.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { EditFoodItemComponent } from './Pages/vendor-dashboard/edit-food-item/edit-food-item.component';
import { CreateFoodItemComponent } from './Pages/vendor-dashboard/create-food-item/create-food-item.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { VendorRegisterComponent } from './pages/vendor-register/vendor-register.component';
import { OfferComponent } from './Pages/shopping-cart/offer/offer.component';


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
    HomeComponent,
    EditFoodItemComponent,
    CreateFoodItemComponent,
    FooterComponent,
    OffersComponent,
    VendorRegisterComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
