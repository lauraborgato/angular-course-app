import { Component, OnInit, OnDestroy, } from '@angular/core';

import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';
import { AuthService } from 'src/app/log-in/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  searchText = "";
  isAuthenticate: boolean;
  constructor(private booksService: BookService, private authService: AuthService) { }

  ngOnInit() {

    this.books = this.booksService.getBooks();

    this.booksService.subject.subscribe(response => {
      this.books = response;
    });

    this.authService.user.subscribe(user => {
      this.isAuthenticate = !!user
    })
  }

  filterBookList() {
    this.books.filter((book, index) => { return book.title.toLowerCase().includes(this.searchText.toLowerCase()) ? book : null });
  }
}
