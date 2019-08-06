import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { BookService } from '../books-container/book.service';
import { Book } from '../models/book';

@Injectable({ providedIn: 'root' })
export class DataBaseService {
    constructor(
        private http: HttpClient,
        private bookService: BookService
      ) {}
    
      storeBooks() {
        const books = this.bookService.getBooks();

        this.http
          .put(
            'https://angular-test-94f28.firebaseio.com/books.json',
            books
          )
          .subscribe(response => {
            console.log(response);
          });
      }
    
      fetchBooks() {
        return this.http
          .get<Book[]>(
            'https://angular-test-94f28.firebaseio.com/books.json'
          )
          .pipe(
            map(books => {
              return books.map(book => {
                return {
                  ...book,
                  author: book.author ? book.author : []
                };
              });
            }),
            tap(books => {
              this.bookService.setBooks(books);
            })
          );
      }
}