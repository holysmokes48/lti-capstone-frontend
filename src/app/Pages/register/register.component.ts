import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private us: UserService, private _router: Router) {

  }

  registerform: FormGroup;
  email: FormControl;
  userName: FormControl;
  password: FormControl;
  securityQuestion: FormControl;
  answer: FormControl;
  type: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.registerform= new FormGroup({
      email: this.email,
      userName: this.userName,
      password: this.password,
      securityQuestion: this.securityQuestion,
      answer: this.answer,
      type: this.type
    });
  }

  createFormControls() {
    this.userName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.securityQuestion = new FormControl('', Validators.required);
    this.answer = new FormControl('', Validators.required);
    this.type = new FormControl('', Validators.required);
  }

  register() {
    console.log(this.registerform.value);
    this.us.register(this.registerform.value);
    this._router.navigate(['/login']);
  }
}
