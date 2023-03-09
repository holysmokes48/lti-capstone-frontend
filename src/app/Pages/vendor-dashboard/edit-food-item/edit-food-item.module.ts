import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditFoodItemComponent } from './edit-food-item.component';
@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: EditFoodItemComponent }]),
  ],
})
export class EditFoodItemModule {}
