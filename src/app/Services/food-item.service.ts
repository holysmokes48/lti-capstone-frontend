import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  constructor(private http: HttpClient, private httpService: HttpGeneralService) { }

  getAllloadFoodItem(){
    return this.httpService.get(`/getAllFoodItems`);
  }

  createFoodItem(data:any) {
    return this.httpService.post('/createFoodItems',data);
  }

  //Gets one Food Item by Food Item id
  getFoodItemById(id: number) {
    return this.httpService.get(`/getFoodItemById/${id}}`);
  }

  updateFoodItem(data: any) {
    return this.httpService.put('/updateFoodItem', data);
  }

  deleteFoodItemById(id: number) {
    return this.httpService.delete(`/deleteFoodItemById/${id}`);
  }
  
  //Gets Food Item List by Vendor Id
  getFoodByVendorId(id: number) {
    return this.httpService.get(`/findFood/${id}`);
  }

  /*

  getAllloadFoodItem(){
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/getAllFoodItems`)
    
  }

  createFoodItem(data:any) {
    
    this.foodItemData.push(data)
    this.http.post('http://localhost:7080/foodDeliveryAppClient/createFoodItem',data)
    .subscribe((data) =>{
      console.log(data);

    })
    
  }
  getFoodItemById(id: number) {
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/getFoodItemById/${id}}`)
  }
  updateFoodItem(data: any) {
    this.foodItemData.push(data)
    this.http.put('http://localhost:7080/foodDeliveryAppClient/updateFoodItem', data)
    .subscribe((data) =>{
      console.log(data);
    })
  }
  deleteFoodItemById(id: number) {
    return this.http.delete(`http://localhost:7080/foodDeliveryAppClient/deleteFoodItemById/${id}`)
  }
  //returns by a list
  getFoodByVendorId(id: number) {
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/findfood/${id}`)
  }

  */

}


