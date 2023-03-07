import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  

  shoppingCartData:any[]=[]

  constructor(private http:HttpClient) { 

  }

  addItemtoCart(data:any) {
    
    this.shoppingCartData.push(data)
    
    // this.http.post('http://localhost:8055/foodDeliveryApp',data)
    // .subscribe((data) =>{
    //   console.log(data);

    // })
    
  }
  loadCart(){
    return this.shoppingCartData
    // return this.http.get('http://localhost:8055/foodDeliveryApp')
    
  }

  //limit user to 1 of each item
  deleteItemfromCart(id: number){

    // return this.http.delete(`/shopping-cart/${id}`);
  }



}
