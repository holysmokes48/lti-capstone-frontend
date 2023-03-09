import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { OfferService } from 'src/app/Services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VendorService } from 'src/app/Services/vendor.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {

  vendorData: any[];
  product: any[];
  grandTotal!: number; 
  id:number;
  currentDateTime: any;
  offer:number;

  constructor(private cs: ShoppingCartService, private fis :FoodItemService, private os: OfferService, private vs: VendorService, private route: ActivatedRoute, private datepipe: DatePipe,
    ) {
     this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm')
    }

  ngOnInit(): void {
    
    this.cs.getProducts().subscribe((res) => {
      this.grandTotal = this.cs.getTotalPrice();
    });
    this.id=this.route.snapshot.params["id"];


    //load vendor details on order confirmation page
    this.vs.getVendorById(this.id).subscribe((res) => {
      const locArray = [];
      for(let key in res){
        locArray.push(res[key]);
      }
      this.vendorData = locArray;
    })
  }

  //before offer is applied to order
  getSubtotal() {
    return this.grandTotal
  }

  //gets applied offer to be viewed on order confirmation page
  getAppliedOffer(){
  

  }

  //after offer is applied to order
  getGrandTotal() {

  }
}
