import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackData: any[];

  constructor(private fs: FeedbackService) { }

  feedbackform: FormGroup;
  rating: FormControl;
  description: FormControl;


  ngOnInit() { 
    this.createFormControls();
    this.createForm();
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
    console.log();
    this.fs.createFeedback(this.feedbackform.value);
  }

  loadFeedbacks() {
    this.fs.getAllFeedback().subscribe((data) => {
      const locArray = [];
      for(let key in data){
        locArray.push(data[key]);
      }
      this.feedbackData = locArray;
    })
  }


}
