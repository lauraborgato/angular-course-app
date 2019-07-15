import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book'
import { Subject } from 'rxjs';
import { Author } from '../models/Author';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
@Injectable({ providedIn: 'root' })
export class BookService implements OnDestroy {
    private books: Book[] = [
        new Book("Origen", new Author("Jhon", "Doe", new Date("14/12/1987"), ""), new Date(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://www.planetadelibros.com/usuaris/libros/fotos/255/m_libros/portada_origen_dan-brown_201706271532.jpg", 1200.21),
        new Book("Silver Locust", new Author("Test", "Auth", new Date("14/12/1987"), ""), new Date(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iUBqaokXQbfIUU4pTAcAQBmoLAeMrPaGSBudgykybQnA9nsY", 99.21),
        new Book("Harry Potter and the Deathly Hallows", new Author("Jenifer", "Doe", new Date("14/12/1987"), ""), new Date(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "http://3.bp.blogspot.com/_VxB-3-Lk5MU/RsW8xP6_yrI/AAAAAAAAAHk/4F-KkGwXjFM/s200/Harry_Potter_and_the_Deathly_Hallows.jpg", 500.00),
        new Book("Libro-4", new Author("Jhon", "Doe", new Date("14/12/1987"), ""), new Date(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://farm9.staticflickr.com/8513/8455590436_5fae8ef2b2_b.jpg", 900.21),
    ];
    private subject = new Subject<Book[]>();

    constructor(private shoppingCartService: ShoppingCartService) { }

    getBooks() {
        console.log(this.books)
        return this.books.slice();
    }

    getBook(index: number) {
        return this.books[index];
    }

    ngOnDestroy() {
        this.subject.unsubscribe();
    }

    addBookToShoppingList(book: Book, index:number){
        this.shoppingCartService.addBookToCart(book, index);
    }

}