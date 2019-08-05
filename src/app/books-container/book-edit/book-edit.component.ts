import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from '../book.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Author } from 'src/app/models/Author';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  publishDate: NgbDatepicker ;
  book: Book;
  id: number = null;
  bookForm: FormGroup;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private booksService: BookService) { }

  ngOnInit() {


    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // console.log('submit');
    console.log(this.bookForm.value);
    this.booksService.addBook(this.bookForm.value);
  }

  clearForm() {
    this.bookForm.reset();
  }

  initForm() {
    let title = '';
    let author = new FormArray([]);
    let price = 0;
    let imageUrl = '';
    let outline = '';
    if (this.editMode) {
      const book = this.booksService.getBook(this.id);
      title = book.title;
      price = book.price;
      imageUrl = book.imageUrl;
     // this.publishDate. ({ year: book.publishDate.getFullYear(), month: book.publishDate.getMonth(), day: book.publishDate.getDay() });
      outline = book.outline;
      if (book['author']) {
        for (let aut of book.author) {
          author.push(
            new FormGroup({
              name: new FormControl(aut.name, Validators.required),
              lastName: new FormControl(aut.lastName, Validators.required),
              birthDay: new FormControl(aut.birthDay, Validators.required),
              fakeName: new FormControl(aut.fakeName)
            })
          );
        }
      }
    }
    this.bookForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      author: author,
      price: new FormControl(price, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      publishDate: new FormControl(this.publishDate, Validators.required),
      outline: new FormControl(outline, Validators.required)
    });

   // this.bookForm.controls.bookForm.get('')
  }

  onAddAuthor() {
    (<FormArray>this.bookForm.get('author')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        birthDay: new FormControl(null, Validators.required),
        fakeName: new FormControl(null)
      })
    );
  }
}
