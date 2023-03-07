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
    return this.http.get(`/getAllfoodItems/`)
    
  }

  createFoodItem(data:any) {
    
    this.foodItemData.push(data)
    this.http.post('/createFoodItem/',data)
    .subscribe((data) =>{
      console.log(data);

    })
    
  }
  getFoodItemById(id: number) {
    return this.http.get(`/getFoodItemById`)
  }
  updateFoodItem(data: any) {
    this.foodItemData.push(data)
    this.http.put('/updateFoodItem', data)
    .subscribe((data) =>{
      console.log(data);
    })
  }
  deleteFoodItemById(id: number) {
    return this.http.delete(`/deleteFoodItemById/${id}`)
  }
  
  findfoodbyid(id: number) {
    return this.http.get(`/findfood/${id}`)
  }

}


