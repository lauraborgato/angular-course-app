import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart:Book[] = [];
  hasBooks: boolean = false;
  private cartSubs: Subscription;
  total: number;

  constructor(private shoppingCartService: ShoppingCartService, config: NgbModalConfig, private modalService: NgbModal, private router: Router) { 
    config.backdrop = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this.cart = this.shoppingCartService.getCart();
    this.total = this.shoppingCartService.getTotal();
    this.hasBooks = this.cart.length > 0 ? true : false;

    this.cartSubs = this.shoppingCartService.cartSubject
      .subscribe(
        (books: Book[]) => {
          this.cart = books;
          this.total = this.shoppingCartService.getTotal();
          this.hasBooks = this.cart.length > 0 ? true : false;
        }
      );
  }

  ngOnDestroy(){
    this.cartSubs.unsubscribe();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

  open(content) {
    this.modalService.open(content);
  }

  onCheckout(){
    //this.clearCart();
    //this.total = 0;
    this.modalService.dismissAll();
    this.router.navigate(['checkout']);
  }
}
