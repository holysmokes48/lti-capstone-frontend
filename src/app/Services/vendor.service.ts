import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  offerData: FormData[] = [];

  getAllVendors() {
    return this.http.get('http://localhost:7080/foodDeliveryAppClient/getAllVendors');
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
}
