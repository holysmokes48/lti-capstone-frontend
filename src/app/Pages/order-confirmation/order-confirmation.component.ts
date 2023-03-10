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

  vendorData: any;
  product: any[];
  grandTotal: any; 
  id:number;
  currentDateTime: any;
  discount:number;
  subtotal:any;

  constructor(private cs: ShoppingCartService, private fis :FoodItemService, private os: OfferService, private vs: VendorService, private route: ActivatedRoute, private datepipe: DatePipe,
    ) {
     this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm')
    }

  ngOnInit(): void {
    
    this.cs.getProducts().subscribe((res) => {
    });
    this.id=this.route.snapshot.params["id"];
    this.discount=this.route.snapshot.params["discount"];

    //load vendor details on order confirmation page
    this.vs.getVendorById(this.id).subscribe((res) => {
      this.vendorData= res;
    })

    this.getSubtotal();
    this.getGrandTotal();
  }

  //before offer is applied to order
  getSubtotal() {
    //return this.grandTotal
    this.subtotal = this.cs.getSubTotal();
  }

  //after offer is applied to order
  getGrandTotal() {
    this.grandTotal = this.cs.getGrandTotal(this.discount);
  }
}
