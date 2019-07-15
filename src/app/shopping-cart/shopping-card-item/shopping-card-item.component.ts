import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-card-item',
  templateUrl: './shopping-card-item.component.html',
  styleUrls: ['./shopping-card-item.component.css']
})
export class ShoppingCardItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  removeBook(){
    console.log(this.index);
    this.shoppingCartService.removeBookFromCart(this.index);
  }

  onEdit(){
    this.shoppingCartService.startEditing.next(this.index);
  }
}
