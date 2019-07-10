import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book'
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class BookService implements OnDestroy{
    private books: Book[];
    private subject = new Subject<Book[]>();

    constructor(private http: HttpClient) { }

    getBooks(){
        return this.books.slice();
    }

    getBook(index:number){
        return this.books[index];
    }

    ngOnDestroy(){
        this.subject.unsubscribe();
    }

}