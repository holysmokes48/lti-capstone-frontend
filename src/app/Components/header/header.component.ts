import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent {
  ItemCount: number;
  isAuthenticated: boolean;
  id: number;

  constructor(private cs: ShoppingCartService, private as: AuthService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.cs.getProducts().subscribe((response) => {
      this.ItemCount = response.length;
    });
    
    this.as.auth_update.subscribe((response) => {
      this.isAuthenticated = response;
    })
  }

=======
export class HeaderComponent implements OnInit{
  id:number;
  constructor(private route: ActivatedRoute ) {}
  
    ngOnInit() {
}
>>>>>>> bae9a35edf97811f293e1e3daf0817a6ac553924
}
