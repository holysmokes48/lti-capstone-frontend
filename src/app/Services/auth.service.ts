import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authentication = false;
  auth_update = new BehaviorSubject<boolean>(false);

  constructor() { }

  authenticate(auth: boolean) {
    this.authentication = auth;
    this.auth_update.next(auth);
  }

  getAuthentication() {
    console.log(this.authentication);
    return this.authentication;
  }
}
