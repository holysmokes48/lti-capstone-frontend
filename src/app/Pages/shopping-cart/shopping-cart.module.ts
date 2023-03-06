import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ShoppingCartComponent }]),
  ],
})
export class ShoppingCartModule {}
