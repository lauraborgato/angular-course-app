import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/Author';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book("Libro-1", new Author("Jhon", "Doe", new Date("14/12/1987"), ""), new Date(), "Test", "https://www.planetadelibros.com/usuaris/libros/fotos/255/m_libros/portada_origen_dan-brown_201706271532.jpg"),
    new Book("Libro-2", new Author("Test", "Auth", new Date("14/12/1987"), ""), new Date(), "Test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iUBqaokXQbfIUU4pTAcAQBmoLAeMrPaGSBudgykybQnA9nsY"),
    new Book("Libro-3", new Author("Jenifer", "Doe", new Date("14/12/1987"), ""), new Date(), "Test", "http://3.bp.blogspot.com/_VxB-3-Lk5MU/RsW8xP6_yrI/AAAAAAAAAHk/4F-KkGwXjFM/s200/Harry_Potter_and_the_Deathly_Hallows.jpg"),
    new Book("Libro-4", new Author("Jhon", "Doe", new Date("14/12/1987"), ""), new Date(), "Test", "https://farm9.staticflickr.com/8513/8455590436_5fae8ef2b2_b.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
