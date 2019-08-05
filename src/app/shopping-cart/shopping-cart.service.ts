import { Injectable, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';
import { Author } from '../models/Author';
import { updateClassDeclaration } from 'typescript';

export class EditedCart{
    constructor(public name: string, public amount: number, public index: number){}
}

@Injectable({providedIn: 'root'})
export class ShoppingCartService implements OnInit{
    cartSubject = new Subject<Book[]>();
    startEditing = new Subject<number>();
    private cart: Book[] = [
        new Book("Libro-1", [ new Author("Jhon", "Doe", new Date("14/12/1987"), "") ], new Date(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://www.planetadelibros.com/usuaris/libros/fotos/255/m_libros/portada_origen_dan-brown_201706271532.jpg", 1200.21, 1)
    ];
    constructor(){}

    ngOnInit(){
        console.log(this.cart);
    }

    getCart(){
       return this.cart;
    }

    getBook(id:number){
        return this.cart[id];
    }

    addBookToCart(book: Book, index: number){
        const existingBook = this.cart.filter((b : Book) => { return b.title === book.title });
        console.log(existingBook);
        if(existingBook.length>0){
            existingBook[0].amount++;
            this.cart[index] = existingBook[0];
        }
        else{
            const newBook = book;
            newBook.amount = 1;
            this.cart.push(newBook);
        }
        this.cartSubject.next(this.cart.slice());
    }

    removeBookFromCart(id: number){
        console.log(id);
        this.cart.splice(id, 1);
        this.cartSubject.next(this.cart.slice());
    }

    getTotal(){
        let total = 0;
        this.cart.forEach((book:Book) => {
            total += book.amount * book.price;
        });
        return total;
    }
    
    clearCart(){
        this.cart = [];
        this.cartSubject.next(this.cart.slice());
    }

    updateCart(book: Book, newCart:EditedCart){
        let editedCart = this.cart[newCart.index]
        editedCart = {
            ...book,
            amount: newCart.amount,
        }

        this.cart[newCart.index] = editedCart;

        this.cartSubject.next(this.cart.slice());
    }

    getTotalItems(){
        let total = 0;
        this.cart.forEach((book:Book) => {
            total += book.amount;
        });
        return total;
    }
}