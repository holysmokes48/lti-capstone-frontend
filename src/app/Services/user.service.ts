import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpGeneralService } from '../shared/http-service/httpgeneral.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: FormData[]=[]

  constructor(private http:HttpClient, private httpService: HttpGeneralService) { 

  }

  login(data: any) {
    this.userData.push(data);
    return this.httpService.post('/login',data);
  }

  register(data: any) {
    this.userData.push(data);
    return this.httpService.post('/createUser',data);
  }

  changePassword(data: any) {
    this.userData.push(data);
    return this.httpService.put('/updateUser',data);
  }

  /*

  login(data: any) {
    this.userData.push(data);
    return this.http.post('http://localhost:8055/foodDeliveryAppClient/login',data);
  }

  register(data: any) {
    this.userData.push(data);
    return this.http.post('http://localhost:8055/foodDeliveryAppClient/createUser',data);
  }

  changePassword(data: any) {
    this.userData.push(data);
    return this.http.put('http://localhost:8055/foodDeliveryAppClient/updateUser',data);
  }

  */
}
