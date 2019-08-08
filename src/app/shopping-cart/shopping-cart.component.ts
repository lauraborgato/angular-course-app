import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cart:Book[] = [];
  private cartSubs: Subscription;
  total: number;
  constructor(private shoppingCartService: ShoppingCartService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

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

  open(content) {
    this.modalService.open(content);
  }

}
