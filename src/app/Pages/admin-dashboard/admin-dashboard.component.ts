import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  feedbackData: any[];
  vendorData: any[];
  vendorId: number;

  constructor(private fs: FeedbackService, private vs: VendorService) { }


  ngOnInit() { 
    
  }

  loadVendors() {
    this.vs.getAllVendors().subscribe((data) => {
      const locArray = [];
      for(let key in data){
        locArray.push(data[key]);
      }
      this.vendorData = locArray;
    })
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
  
  
  onDelete() {
    this.vs.deleteVendorbyId(this.vendorId);
  }


}

