import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfferService } from 'src/app/Services/offer.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  public product: any = [];
  public grandTotal!: number; 
  id:number;
  offers: any = [];
  discount= {discount: 0};

  constructor(private _router: Router, private os: OfferService, private cs: ShoppingCartService, private fis :FoodItemService, private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadOffers();
    this.id=this.route.snapshot.params["id"];
  }

  loadProducts() {
    this.cs.getProducts().subscribe((res) => {
      this.product = res;
      this.getSubTotal();
    });
  }

  getSubTotal() {
    this.grandTotal = this.cs.getSubTotal();
  }

  loadOffers() {
    this.os.getAllOffers().subscribe((res) => {
      this.offers = res;
    })
  }

  removeItem(item: any) {
    this.cs.removeCartItem(item);
    this.loadProducts();
    this.cs.getSubTotal();
  }

  removeAll() {
    this.cs.removeAllCart();
    this.loadProducts();
    this.cs.getSubTotal();
  }

  confirmOrder() {
    let myDiscount : number = + this.discount;
    console.log(this.discount.discount);
    this._router.navigate(['/order-confirmation', this.id, this.discount.discount]);
    //this._router.navigate(['/order-confirmation/1/50']);
  }
}
