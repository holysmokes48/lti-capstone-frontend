import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OfferService } from 'src/app/Services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-offers',
  templateUrl: './create-offers.component.html',
  styleUrls: ['./create-offers.component.css']
})
export class CreateOffersComponent {
  
offerData:any[];

constructor(private offerService: OfferService ,
  private route: ActivatedRoute,
  private _router: Router){}

offerForm: FormGroup;
discount:FormControl;
offerDescription: FormControl;
id: number;

ngOnInit(){
  this.createFormControls();
  this.createForm();
  this.id=this.route.snapshot.params["id"];
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

createOffer(){
  console.log()
  this.offerService.createOffer(this.offerForm.value).subscribe((response) => {
    this._router.navigate(['/vendor-dashboard', this.id]);
  })
}


}