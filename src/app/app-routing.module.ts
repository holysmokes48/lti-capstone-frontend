import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./Pages/admin-dashboard/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'create-food-item',
    loadChildren: () =>
      import('./Pages/create-food-item/create-food-item.module').then(
        (m) => m.CreateFoodItemModule
      ),
  },
  {
    path: 'edit-food-item',
    loadChildren: () =>
      import('./Pages/edit-food-item/edit-food-item.module').then(
        (m) => m.EditFoodItemModule
      ),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./Pages/feedback/feedback.module').then((m) => m.FeedbackModule),
  },
  {
    path: 'food-menu',
    loadChildren: () =>
      import('./Pages/food-menu/food-menu.module').then(
        (m) => m.FoodMenuModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./Pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'order-confirmation',
    loadChildren: () =>
      import('./Pages/order-confirmation/order-confirmation.module').then(
        (m) => m.OrderConfirmationModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./Pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./Pages/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('./Pages/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
  },
  {
    path: 'vendor-dashboard',
    loadChildren: () =>
      import('./Pages/vendor-dashboard/vendor-dashboard.module').then(
        (m) => m.VendorDashboardModule
      ),
  },
  {
    path: 'create-offers',
    loadChildren: () =>
      import('./Pages/vendor-dashboard/create-offers/create-offers.module').then(
        (m) => m.CreateOffersModule
      ),
  },
  {
    path: 'edit-offers',
    loadChildren: () =>
      import('./Pages/vendor-dashboard/edit-offers/edit-offers.module').then(
        (m) => m.EditOffersModule
      ),
  },
  {
    path: 'offer',
    loadChildren: () =>
      import('./Pages/shopping-cart/offer/offer.module').then(
        (m) => m.OfferModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
