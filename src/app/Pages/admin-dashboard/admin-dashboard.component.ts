import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private fs: FeedbackService, private vs: VendorService, private _router: Router) { }


  ngOnInit() { 
    this.loadVendors()
    this.loadFeedbacks()
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
  
  
  onDelete(vendor) {
    this.vs.deleteVendorbyId(vendor.vendorId).subscribe(response=>{
      console.log(response)
      this.loadVendors()
    });
    
    
  }


}

