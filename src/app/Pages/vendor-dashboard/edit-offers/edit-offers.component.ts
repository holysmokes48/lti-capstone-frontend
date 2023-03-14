import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfferService } from 'src/app/Services/offer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.component.html',
  styleUrls: ['./edit-offers.component.css']
})
export class EditOffersComponent {

  //Offer Id
  offerId: number;

  //Vendor Id
  vendorId: number;

  //Offer Form
  offerForm: FormGroup;
  discount: FormControl;
  offerDescription: FormControl;

  constructor(private route: ActivatedRoute, private os: OfferService, private router: Router) {}
  
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.offerId=this.route.snapshot.params["offerId"];
      this.vendorId=this.route.snapshot.params["vendorId"];
    });
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.offerForm = new FormGroup({
      discount:this.discount,
      offerDescription:this.offerDescription,
    })
  }

  createFormControls() {
    this.discount = new FormControl('', Validators.required);
    this.offerDescription = new FormControl('', Validators.required);
  }

  //Update offer Information
  updateOffer() {
    //Add Offer Id to input
    this.offerForm.value.offerId = this.offerId
    this.os.updateOffer(this.offerForm.value).subscribe((response) => {
      this.router.navigate(['/vendor-dashboard', this.vendorId])
    });
  }

}
