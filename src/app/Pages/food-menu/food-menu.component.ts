import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { VendorService } from 'src/app/Services/vendor.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {

  id: number;
  editMode = false;
  fooditem:any=[]
  vendorInfo: any=[]
  isAuthenticated = true;  

  constructor(private fis :FoodItemService, private vs: VendorService,  private route: ActivatedRoute, private sc: ShoppingCartService,
    private cs: ShoppingCartService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

    });
    this.loadVendor();
    this.loadFoodItems();
    this.cs.getProducts().subscribe((response) => {
      if(response.length != 0 && response[0].vendorId != this.id) {
        this.isAuthenticated = false;
      }
    })
  }
 
  loadVendor() {
    this.vs.getVendorById(this.id).subscribe((response)=>{
      this.vendorInfo= JSON.parse(JSON.stringify(response))
    });
  }

  loadFoodItems() {
    this.fis.getFoodByVendorId(this.id).subscribe((data) => {
      const locArray = [];
      for(let key in data){
        locArray.push(data[key]);
      }
      this.fooditem = locArray;
    })
  }

  addToCart(item:any){
    var ret = this.sc.addToCart(item)
    if(!ret) {
      alert("You can only order from one restaurant at a time");
    }
  }
}
