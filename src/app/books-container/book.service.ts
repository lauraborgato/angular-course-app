import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Book } from '../models/book'
import { Subject } from 'rxjs';
import { Author } from '../models/Author';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { BooksContainerComponent } from './books-container.component';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })



export class BookService implements OnDestroy {
   
    private books: Book[] = [];
    subject = new Subject<Book[]>();

    constructor(private shoppingCartService: ShoppingCartService, private http: HttpClient) { }

    getBooks() {
        return this.http.get<Book[]>('https://angular-test-94f28.firebaseio.com/books.json')
            .pipe(map(
                books => {
                    return books.map(book => {
                        return {
                            ...book,
                            publishDate: new Date(book.publishDate['year'], book.publishDate['month'], book.publishDate['day']),
                            author: book.author ? book.author : []
                        };
                    });
                }),
                tap(books => {
                    this.books = books;
                    this.subject.next(this.books.slice());
                })
            );
    }

    getBook(index: number) {
        return this.books[index];
    }

    ngOnDestroy() {
        this.subject.unsubscribe();
    }

    addBookToShoppingList(book: Book, index: number) {
        this.shoppingCartService.addBookToCart(book, index);
    }

    addBook(book: Book) {
        this.books.push(book);
        this.http.put('https://angular-test-94f28.firebaseio.com/books.json', this.books)
            .subscribe(response => {
                console.log(response);
            });

        this.subject.next(this.books.slice());
    }
}