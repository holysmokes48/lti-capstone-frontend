import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { VendorService } from 'src/app/Services/vendor.service';
import { response } from 'express';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  id: number;
  editMode = false;
  fooditem:any=[]
  vendorInfo: any=[]  

  constructor(private fis :FoodItemService, private vs: VendorService,  private route: ActivatedRoute, private sc: ShoppingCartService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

    });
    this.loadVendor();
    this.loadFoodItems();
  }

  loadVendor() {
    this.vs.getVendorById(this.id).subscribe((response)=>{
      this.vendorInfo= JSON.parse(JSON.stringify(response))
    });
  }

  loadFoodItems() {
    this.fis.getAllloadFoodItem().subscribe((data) => {
      const locArray = [];
      for(let key in data){
        locArray.push(data[key]);
      }
      this.fooditem = locArray;
    })
  }

  addToCart(item:any){
    this.sc.addToCart(item)
  }



removeItem(fooditem:any){
  this.fis.deleteFoodItemById(fooditem)
}

}
