import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  book: Book;
  id: number = null;
  
  constructor(private route:ActivatedRoute, private booksService: BookService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.book = this.booksService.getBook(this.id);
      }
    );
  }

}
