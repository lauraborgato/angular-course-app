import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart:Book[] = [];
  private cartSubs: Subscription;
  total: number;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.getCart();
    this.total = this.shoppingCartService.getTotal();
    this.cartSubs = this.shoppingCartService.cartSubject
      .subscribe(
        (books: Book[]) => {
          this.cart = books;
          this.total = this.shoppingCartService.getTotal();
        }
      );
  }

  ngOnDestroy(){
    this.cartSubs.unsubscribe();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

}
