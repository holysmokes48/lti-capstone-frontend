
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { FoodItemService } from 'src/app/Services/food-item.service';

@Component({
  selector: 'app-edit-food-item',
  templateUrl: './edit-food-item.component.html',
  styleUrls: ['./edit-food-item.component.css']
})
export class EditFoodItemComponent { //implements OnInit {
/*
fooditemData:any[];

constructor(private fs: FoodItemService, private route: ActivatedRoute, private router: Router){}

editfoodItemForm: FormGroup;
fooditem: any;
id: number;
foodName:FormControl;
price: FormControl;
description: FormControl;

ngOnInit(){
  this.createFormControls();
  this.createForm();
  this.id=this.route.snapshot.params["id"];
}

createForm() {
  this.editfoodItemForm = new FormGroup({
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


updateFoodItem(fooditem){
  console.log()
  this.fooditem = this.editfoodItemForm.value;
  this.fooditem.foodId = this.id;
  this.fs.updateFoodItem(fooditem).subscribe(res => {
    this.fooditem.foodName = res.foodName, 
    this.fooditem.description = res.description, 
    this.fooditem.price = res.price})
}

*/

}


