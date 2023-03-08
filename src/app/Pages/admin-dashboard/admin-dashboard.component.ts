import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/Services/feedback.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  feedbackData: any[];

  constructor(private fs: FeedbackService) { }


  ngOnInit() { 
    
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

