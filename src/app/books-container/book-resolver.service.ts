import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Book } from '../models/book';
import { BookService } from './book.service';

@Injectable({ providedIn: 'root' })
export class BookResolverService implements Resolve<Book[]> {
  constructor(
    private bookService: BookService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let books = this.bookService.getBooks();
    return books;
  }
}
