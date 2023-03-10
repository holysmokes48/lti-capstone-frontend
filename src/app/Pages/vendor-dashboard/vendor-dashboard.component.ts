import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodItemService} from 'src/app/Services/food-item.service';
import { OfferService } from 'src/app/Services/offer.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit{
offerData:any=[];
foodItemData:any=[]
id: number;
vendorInfo: any=[];

constructor(private foodService: FoodItemService, private offerservice:OfferService,private route: ActivatedRoute,
  private vendorService: VendorService){}

ngOnInit(){ 
  this.route.params.subscribe((params: Params) => {
    this.id=this.route.snapshot.params["id"];
    this.vendorService.getVendorById(this.id).subscribe((response)=>{
      this.vendorInfo= JSON.parse(JSON.stringify(response))
    });
  });
  //this.loadFoodItems();
  this.loadOffers();
}

loadFoodItems(){
  this.foodService.getFoodByVendorId(this.id).subscribe((data) => {
    const locArray = [];
    for(let key in data){
      locArray.push(data[key]);
    }
    this.foodItemData= locArray
    console.log(this.foodItemData);
  })
}

deleteFoodItem(foodItem:any){
  this.foodService.deleteFoodItemById(foodItem.foodId).subscribe((response) => {
    this.loadFoodItems();
  });
}

loadOffers(){
  this.offerservice.getAllOffers().subscribe((data) =>{
    const locArray = [];
    for(let key in data){
      locArray.push(data[key]);
    }
    this.offerData= locArray
    this.loadFoodItems();
  })
}

deleteOffer(offer:any){
  this.offerservice.deleteOffer(offer.offerId).subscribe((response) => {
    console.log(response)
    this.loadOffers()
  });
}



}

