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

    console.log(books);

    return books;
    /*if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }*/
  }
}
