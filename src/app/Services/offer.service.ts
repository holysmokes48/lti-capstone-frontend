import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient, private httpService: HttpGeneralService) { }

  offerData: FormData[]=[]

  getAllOffers(){
    return this.httpService.get('/getAllOffers')
  }

  createOffer(data:any){
    this.offerData.push(data);
    return this.httpService.post('/createOffer',data);
  }

  getOfferById(id: number){
    return this.httpService.get(`/getOfferById/${id}`)
  }

  updateOffer(data:any){
    this.offerData.push(data)
    this.httpService.put('/updateOffer',data)
    .subscribe((data) =>{
      console.log(data);

    })
  }

  deleteOffer(id: number){
    return this.httpService.delete(`/deleteOfferById/${id}`);
  }

  /*

  getAllOffers(){
    return this.http.get('http://localhost:8055/foodDeliveryAppClient/getAllOffers')
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
    return this.http.delete(`http://localhost:7080/foodDeliveryAppClient/deleteOfferById/${id}`);
  }

  */

}
