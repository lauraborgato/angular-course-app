import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { ShoppingCartService, EditedCart } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Book;

  constructor(private scService: ShoppingCartService) { }

  ngOnInit() {
    this.subscription = this.scService.startEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editedItem = this.scService.getBook(index);
          this.slForm.setValue({
            name: this.editedItem.title,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCart = new EditedCart(value.name, value.amount, this.editedItemIndex);
    this.scService.updateCart(this.editedItem, newCart);
    form.reset();
  }

  onClear() {
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
