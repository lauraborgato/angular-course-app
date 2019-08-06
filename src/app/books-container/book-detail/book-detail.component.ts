import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private booksService: BookService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.book = this.booksService.getBook(this.id);
        }
      );
  }
  
  addBookToShoppingCart() {
    this.booksService.addBookToShoppingList(this.book, this.id);
  }
  
  onEditBook() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}


