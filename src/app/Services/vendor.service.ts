import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient, private httpService: HttpGeneralService) {}

  offerData: FormData[] = [];

  getAllVendors() {
    return this.httpService.get('/getAllVendors');
  }

  createVendor(data: any) {
    this.offerData.push(data);
    return this.httpService.post('/createVendor', data);
  }

  getVendorById(id: number) {
    return this.httpService.get(`/getVendorById/${id}`);
  }
  getVendorByUserId(id: number) {
    return this.httpService.get(`/getVendorByUserId/${id}`);
  }

  updateVendor(data: any) {
    this.offerData.push(data);
    this.httpService.put('/updateVendor', data).subscribe((data) => {
      console.log(data);
    });
  }

  deleteVendorbyId(id: number) {
    console.log(id)
    return this.httpService.delete(`/deleteVendorById/${id}`);
  }

  /*

  getAllVendors() {
    return this.http.get('http://localhost:8055/foodDeliveryAppClient/getAllVendors');
  }

  createVendor(data: any) {
    this.offerData.push(data);
    return this.http.post('http://localhost:7080/foodDeliveryAppClient/createVendor', data);
  }

  getVendorById(id: number) {
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/getVendorById/${id}`);
  }
  getVendorByUserId(id: number) {
    return this.http.get(`http://localhost:7080/foodDeliveryAppClient/getVendorByUserId/${id}`);
  }

  updateVendor(data: any) {
    this.offerData.push(data);
    this.http.put('http://localhost:7080/foodDeliveryAppClient/updateVendor', data).subscribe((data) => {
      console.log(data);
    });
  }

  deleteVendorbyId(id: number) {
    console.log(id)
    return this.http.delete(`http://localhost:7080/foodDeliveryAppClient/deleteVendorById/${id}`);
  }

  */
}
