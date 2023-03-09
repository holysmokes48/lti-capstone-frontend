import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  public product: any = [];
  public grandTotal!: number; 
  id:number;
  discount:0;

  constructor(private cs: ShoppingCartService, private fis :FoodItemService, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cs.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cs.getTotalPrice();
    });
    this.id=this.route.snapshot.params["id"];
  }


  removeItem(item: any) {
    this.cs.removeCartItem(item);
  }

}
