import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models/book'
@Injectable()
export class BookService{
    books: Book[];

    constructor(private http: HttpClient){}


}