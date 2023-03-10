import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FoodItemService } from 'src/app/Services/food-item.service';
@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.css']
})
export class CreateFoodItemComponent implements OnInit{

fooditemData:any[];

constructor(private fs: FoodItemService, private router: Router ){}

foodItemForm: FormGroup;
foodName:FormControl;
price: FormControl;
description: FormControl;

ngOnInit(){
  this.createFormControls();
  this.createForm();
}
createForm() {
  this.foodItemForm = new FormGroup({
    foodName:this.foodName,
    price:this.price,
    description:this.description,
  })
}

createFormControls() {
  this.foodName = new FormControl('', Validators.required);
  this.price = new FormControl('', Validators.required);
  this.description = new FormControl('', Validators.required);
}

createFoodItem(){
  console.log()
  this.fs.createFoodItem(this.foodItemForm.value)
  this.router.navigate(['/vendor-dashboard/id:'])
}
}