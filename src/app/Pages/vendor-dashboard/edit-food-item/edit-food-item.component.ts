
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from 'src/app/Services/food-item.service';

@Component({
  selector: 'app-edit-food-item',
  templateUrl: './edit-food-item.component.html',
  styleUrls: ['./edit-food-item.component.css']
})
export class EditFoodItemComponent { 
  constructor(private fs: FoodItemService, private route: ActivatedRoute, private router: Router) {}

  //Edit Food Item Form Information
  editFoodItemForm: FormGroup;
  foodName:FormControl;
  price: FormControl;
  description: FormControl;

  //Food Item object holding all information to update Food Item in database
  foodItem: any;

  //Food Item Id
  foodId: number;

  //Vendor Id
  vendorId: number;

  ngOnInit(){
    this.createFormControls();
    this.createForm();
    this.foodId=this.route.snapshot.params["foodId"];
    this.vendorId=this.route.snapshot.params["vendorId"];
  }

  createForm() {
    this.editFoodItemForm = new FormGroup({
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

  //Update Food Item in database then return to vendor dashboard
  updateFoodItem(){
    this.foodItem = this.editFoodItemForm.value;
    this.foodItem.foodId = this.foodId;
    this.foodItem.vendorId = this.vendorId;
    this.fs.updateFoodItem(this.foodItem).subscribe((response) => {
      this.router.navigate(['/vendor-dashboard', this.vendorId])
    }); 
  }

}


