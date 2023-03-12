
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
  fooditemData:any[];

  constructor(private fs: FoodItemService, private route: ActivatedRoute, private router: Router){}

  editfoodItemForm: FormGroup;
  fooditem: any;
  foodId: number;
  vendorId: number;
  foodName:FormControl;
  price: FormControl;
  description: FormControl;

  ngOnInit(){
    this.createFormControls();
    this.createForm();
    this.foodId=this.route.snapshot.params["foodId"];
    this.vendorId=this.route.snapshot.params["vendorId"];
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


  updateFoodItem(){
    console.log()
    this.fooditem = this.editfoodItemForm.value;
    this.fooditem.foodId = this.foodId;
    this.fooditem.vendorId = this.vendorId;
    this.fs.updateFoodItem(this.fooditem).subscribe((response) => {
      this.router.navigate(['/vendor-dashboard', this.vendorId])
    }); 
  }
}


