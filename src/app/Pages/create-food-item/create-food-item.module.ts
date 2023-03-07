import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateFoodItemComponent } from './create-food-item.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CreateFoodItemComponent }]),
  ],
})
export class CreateFoodItemModule {}
