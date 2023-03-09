import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: FormData[]=[]

  constructor(private http:HttpClient) { 

  }

  login(data: any) {
    this.userData.push(data);
    return this.http.post('http://localhost:7080/foodDeliveryAppClient/login',data);
  }

  register(data: any) {
    this.userData.push(data);
    return this.http.post('http://localhost:7080/foodDeliveryAppClient/createUser',data);
  }

  changePassword(data: any) {
    this.userData.push(data);
    return this.http.put('http://localhost:7080/foodDeliveryAppClient/updateUser',data);
  }
}
