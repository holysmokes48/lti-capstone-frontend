import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodItemService} from 'src/app/Services/food-item.service';
import { OfferService } from 'src/app/Services/offer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit{
offerData:any[];
foodItemData:any[]
constructor(private foodService: FoodItemService, private offerservice:OfferService,){}

ngOnInit(){
 
}

loadFoodItems(){
  this.foodService.getAllloadFoodItem().subscribe((data) => {
    const locArray = [];
    for(let key in data){
      locArray.push(data[key]);
        }
        this.foodItemData= locArray
  })
}

deleteFoodItem(){
  this.foodService.deleteFoodItemById
}

loadOffers(){
this.offerservice.getAllOffers().subscribe((data) =>{
  const locArray = [];
  for(let key in data){
    locArray.push(data[key]);
      }
      this.offerData= locArray
})
}

deleteOffer(){
  this.offerservice.deleteOffer
}


}
