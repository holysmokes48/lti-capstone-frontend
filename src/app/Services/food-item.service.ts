import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  foodItemData: FormData[]=[]

  constructor(private http: HttpClient) { 

  }
  getAllloadFoodItem(){
    return this.http.get(`http://localhost:8055/foodDeliveryAppClient/getAllFoodItems`)
    
  }

  createFoodItem(data:any) {
    
    this.foodItemData.push(data)
    this.http.post('http://localhost:8055/foodDeliveryAppClient/createFoodItem',data)
    .subscribe((data) =>{
      console.log(data);

    })
    
  }
  getFoodItemById(id: number) {
    return this.http.get(`http://localhost:8055/foodDeliveryAppClient/getFoodItemById/${id}}`)
  }
  updateFoodItem(data: any) {
    this.foodItemData.push(data)
    this.http.put('http://localhost:8055/foodDeliveryAppClient/updateFoodItem', data)
    .subscribe((data) =>{
      console.log(data);
    })
  }
  deleteFoodItemById(id: number) {
    return this.http.delete(`http://localhost:8055/foodDeliveryAppClient/deleteFoodItemById/${id}`)
  }
  //returns by a list
  getFoodByVendorId(id: number) {
    return this.http.get(`http://localhost:8055/foodDeliveryAppClient/findfood/${id}`)
  }

}


