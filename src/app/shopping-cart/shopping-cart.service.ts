import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';

export class EditedCart{
    constructor(public name: string, public amount: number, public index: number){}
}

@Injectable({providedIn: 'root'})
export class ShoppingCartService{
    cartSubject = new Subject<Book[]>();
    startEditing = new Subject<number>();
    private cart: Book[] = [];
    
    constructor(){}

    getCart(){
       return this.cart;
    }

    getBook(id:number){
        return this.cart[id];
    }

    addBookToCart(book: Book){
        const existingBook = this.cart.filter((b : Book) => { return b.title === book.title });
        if(existingBook.length>0){
            existingBook[0].amount++;
            let index = this.cart.indexOf(existingBook[0]);
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
