import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({providedIn: 'root'})
export class ShoppingCartService{
    cart: Book[];
    constructor(){}

    getCart(){
        return this.cart.slice();
    }
    
}