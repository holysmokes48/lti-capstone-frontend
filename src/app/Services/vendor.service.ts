import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  offerData: FormData[] = [];

  getAllVendors() {
    return this.http.get('/getAllVendors');
  }

  createVendor(data: any) {
    this.offerData.push(data);
    this.http.post('/createVendor', data).subscribe((data) => {
      console.log(data);
    });
  }

  getVendorById(id: number) {
    return this.http.get(`/getVendorById/${id}`);
  }
  getVendorByUserId(id: number) {
    return this.http.get(`/getVendorByUserId/${id}`);
  }

  updateVendor(data: any) {
    this.offerData.push(data);
    this.http.put('/updateVendor', data).subscribe((data) => {
      console.log(data);
    });
  }

  deleteVendorbyId(id: number) {
    return this.http.delete(`/deleteVendorById/${id}`);
  }
}
