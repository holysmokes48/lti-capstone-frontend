import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackData: any[];

  constructor(private fs: FeedbackService, private as: AuthService, private cs: ShoppingCartService,
    private router: Router) { }

  feedbackform: FormGroup;
  rating: FormControl;
  description: FormControl;


  ngOnInit() { 
    this.createFormControls();
    this.createForm();
    this.as.authenticate(false);
    this.cs.removeAllCart();
  }

  createForm() {
    this.feedbackform = new FormGroup({
      rating: this.rating,
      description: this.description,
    })
  }

  createFormControls() {
    this.rating = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
  }

  createFeedback(){
    this.fs.createFeedback(this.feedbackform.value).subscribe((response) => {
      this.as.authenticate(true);
      this.router.navigate(['/user-dashboard']);
    });
  }

  loadFeedbacks() {
    this.fs.getAllFeedback().subscribe((data) => {
      const locArray = [];
      for(let key in data){
        locArray.push(data[key]);
      }
      this.feedbackData = locArray;
    });
  }
}
