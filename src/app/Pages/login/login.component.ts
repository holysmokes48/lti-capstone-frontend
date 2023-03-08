import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: any;

  constructor(private us: UserService, private _router: Router) {

  }
  
  loginform: FormGroup;
  userName: FormControl;
  password: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.loginform= new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  login() {
    this.us.login(this.loginform.value).subscribe((response) => {
     // JSON.parse(JSON.stringify(response));
      this.userData = JSON.parse(JSON.stringify(response));
      console.log(this.userData['type']);
      if(this.userData['type'].match(/^User$/)) {
        this._router.navigate(['/user-dashboard']);
      }
      else if(this.userData['type'].match(/^Admin$/)) {
        this._router.navigate(['/admin-dashboard']);
      }
      else {

      }
    });
  }
}
