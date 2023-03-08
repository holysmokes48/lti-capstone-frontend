import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateOffersComponent } from './create-offers.component';
@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CreateOffersComponent }]),
  ],
})
export class CreateOffersModule {}
