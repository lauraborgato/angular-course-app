import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Book } from '../models/book';
import { BookService } from './book.service';
import { DataBaseService } from '../sheared/database.service';

@Injectable({ providedIn: 'root' })
export class BookResolverService implements Resolve<Book[]> {
  constructor(
    private bookService: BookService,
    private dataBaseService: DataBaseService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let books = this.bookService.getBooks();
    if (books.length === 0) {
      return this.dataBaseService.fetchBooks();
    } else {
      return books;
    }
  }
}
