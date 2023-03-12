import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodItemService } from 'src/app/Services/food-item.service';
@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.css']
})
export class CreateFoodItemComponent implements OnInit{

fooditemData:any[];

constructor(private fs: FoodItemService, private router: Router, private route: ActivatedRoute){}

foodItemForm: FormGroup;
foodName:FormControl;
price: FormControl;
description: FormControl;
id: any;

ngOnInit(){
  this.createFormControls();
  this.createForm();
  this.id=this.route.snapshot.params["id"];
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
  this.foodItemForm.value.vendorId = this.id;
  this.fs.createFoodItem(this.foodItemForm.value).subscribe((response) => {
    this.router.navigate(['/vendor-dashboard', this.id])
  })
}
}