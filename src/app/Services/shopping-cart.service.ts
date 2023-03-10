import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodItemService } from './food-item.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {

  public cartItemList =[{foodId: 2, foodName: "burer", description: "awefawe", price: 10}];
  public productList = new BehaviorSubject<any>([{foodId: 2, foodName: "burer", description: "awefawe", price: 10}]);

  constructor(private http: HttpClient, private fis: FoodItemService) {}
  
  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    //this.getTotalPrice();
  }

  getSubTotal() {
    let subTotal = 0;
    this.cartItemList.map((a: any) => {
      subTotal += a.price;
    });
    return subTotal;
  }

  getGrandTotal(discount: any) {
    let grandTotal = this.getSubTotal();
    return (grandTotal * (1 - (discount / 100))).toFixed(2);
  }

  removeCartItem(product: any) {
    this.cartItemList.some((a: any, index: any) => {
      console.log("product " + product['foodId']);
      console.log("a " + a.foodId)
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.productList.next(this.cartItemList);
        return true;
      }
      return false;
    });

  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
