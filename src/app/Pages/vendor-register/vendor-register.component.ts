import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute, Params, Router } from '@angular/router';
>>>>>>> 5e05244dee9be8ca86e6ca9ba8c460202c411a4d
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent {
  constructor(private route: ActivatedRoute, private vs: VendorService, private _router: Router) {

  }
  
  vendor: any;
  id: number;
  vendorregisterform: FormGroup;
  vendorName: FormControl;
  vendorLocation: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.id=this.route.snapshot.params["id"];
  }

  createForm() {
    this.vendorregisterform= new FormGroup({
      vendorName: this.vendorName,
      vendorLocation: this.vendorLocation,
    });
  }

  createFormControls() {
    this.vendorName = new FormControl('', Validators.required);
    this.vendorLocation = new FormControl('', Validators.required);
  }

  createVendor() {
    this.vendor = this.vendorregisterform.value;
    this.vendor.userId = this.id;
    this.vs.createVendor(this.vendor).subscribe((response) => {
      this._router.navigate(['/login']);
    });
  }
}
