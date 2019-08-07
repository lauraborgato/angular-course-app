import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Book } from '../models/book'
import { Subject } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable({ providedIn: 'root' })
export class BookService implements OnDestroy {

    private books: Book[] = [];
    subject = new Subject<Book[]>();

    constructor(private shoppingCartService: ShoppingCartService, private http: HttpClient) { }

    getBooks() {
        return this.books.slice();
    }

    getBook(index: number) {
        return this.books[index];
    }

    ngOnDestroy() {
        this.subject.unsubscribe();
    }

    addBookToShoppingList(book: Book) {
        this.shoppingCartService.addBookToCart(book);
    }

    setBooks(books: Book[]) {
        this.books = books;
        this.subject.next(this.books.slice());
    }

    addBook(book: Book) {
        this.books.push(book);
        this.subject.next(this.books.slice());
    }

    updateBook(index: number, newBook: Book) {
        this.books[index] = newBook;
        this.subject.next(this.books.slice());
    }

    deleteBook(index: number) {
        this.books.splice(index, 1);
        this.subject.next(this.books.slice());
    }
}