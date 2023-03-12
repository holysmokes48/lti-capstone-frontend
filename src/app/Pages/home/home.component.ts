import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private as: AuthService) {

  }

  ngOnInit() {
    this.as.authenticate(false);
  }
}
