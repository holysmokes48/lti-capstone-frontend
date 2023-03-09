import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { VendorService } from 'src/app/Services/vendor.service';
import { response } from 'express';

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

  constructor(private fis :FoodItemService, private vs: VendorService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    
      
      
    });
    this.vs.getVendorById(this.id).subscribe((response)=>{
      this.vendorInfo= JSON.parse(JSON.stringify(response))
    })
  }



removeItem(fooditem:any){
  this.fis.deleteFoodItemById(fooditem)
}

}
