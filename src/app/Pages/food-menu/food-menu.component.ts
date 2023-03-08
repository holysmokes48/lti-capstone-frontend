import { Component, OnInit } from '@angular/core';
import { FoodItemService } from 'src/app/Services/food-item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  id: number;
  editMode = false;
  public fooditem:any=[]
  

  constructor(private fis :FoodItemService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      
    });
  }


removeItem(fooditem:any){
  this.fis.deleteFoodItemById(fooditem)
}

}
