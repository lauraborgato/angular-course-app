import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';
import { AuthService } from 'src/app/log-in/auth.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  isAuthenticate: boolean = false;

  constructor(private booksService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.book = this.booksService.getBook(this.id);
        }
      );
    this.authService.user.subscribe(user => {
      this.isAuthenticate = !!user;
    })
  }
  
  addBookToShoppingCart() {
    this.booksService.addBookToShoppingList(this.book);
  }
  
  onEditBook() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteBook(){
    this.booksService.deleteBook(this.id);
  }
}


