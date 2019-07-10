import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Author } from '../models/Author';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
