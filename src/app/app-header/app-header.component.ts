import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../log-in/auth.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Book } from '../models/book';
import { DataBaseService } from '../sheared/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;
  private scSub: Subscription;
  totalItems: number;
  constructor(private authService:AuthService, private shoppingCartService : ShoppingCartService, private dataBaseService: DataBaseService) { }

  ngOnInit() {
    this.totalItems = this.shoppingCartService.getTotalItems();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.scSub = this.shoppingCartService.cartSubject.subscribe(()=>{ this.totalItems = this.shoppingCartService.getTotalItems()})

    console.log(this.totalItems);
  }
  
  onLogOut(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.scSub.unsubscribe();
  }

  onSaveData() {
    this.dataBaseService.storeBooks();
  }

  onFetchData() {
    this.dataBaseService.fetchBooks().subscribe();
  }
}
