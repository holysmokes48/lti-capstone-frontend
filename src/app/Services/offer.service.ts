import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  offerData: FormData[]=[]

  getAllOffers(){
    return this.http.get('http://localhost:7080/foodDeliveryAppClient/getAllOffers')
  }

  createOffer(data:any){
    this.offerData.push(data)
    this.http.post('http://localhost:7080/foodDeliveryAppClient/createOffer',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  getOfferById(id: number){
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/getOfferById/${id}`)
  }

  updateOffer(data:any){
    this.offerData.push(data)
    this.http.put('http://localhost:7080/foodDeliveryAppClient/updateOffer',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  deleteOffer(id: number){
    return this.http.delete(`http://localhost:8055/foodDeliveryAppClient/deleteOfferById/${id}`);
  }

}
