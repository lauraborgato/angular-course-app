import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  searchText = '';
  constructor(private booksService: BookService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  filterBookList(){
    this.books = this.booksService.getBooks().filter((book, index) =>
    { return book.title.toLowerCase().includes(this.searchText.toLowerCase()) ? book : null });
  }

}
