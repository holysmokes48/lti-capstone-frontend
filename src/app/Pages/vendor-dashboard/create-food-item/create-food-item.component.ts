import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodItemService } from 'src/app/Services/food-item.service';
@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.css']
})
export class CreateFoodItemComponent implements OnInit{

fooditemData:any[];

constructor(private foodService: FoodItemService ){}

foodItemform: FormGroup;
foodName:FormControl;
price: FormControl;
description: FormControl;

ngOnInit(){
  this.createFormControls();
  this.createForm();
}
createForm() {
  this.foodItemform = new FormGroup({
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
  this.foodService.createFoodItem(this.foodItemform.value)
}
}