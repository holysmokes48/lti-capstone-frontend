import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  offerData: FormData[]=[]

  getAllOffers(){
    return this.http.get('/offers')
  }

  createOffer(data:any){
    this.offerData.push(data)
    this.http.post('/createoffer',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  getOfferById(id: number){
    return this.http.get(`/offerbyid/${id}`)
  }

  updateOffer(data:any){
    this.offerData.push(data)
    this.http.put('/updateoffer',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  deleteOffer(id: number){
    return this.http.delete(`/deleteoffer/${id}`);
  }

}
