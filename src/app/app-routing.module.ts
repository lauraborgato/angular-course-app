import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookEditComponent } from './books-container/book-edit/book-edit.component';
import { BooksContainerComponent } from './books-container/books-container.component';

const routes: Routes = [
  { path: '', component: BooksContainerComponent },
  {
    path: 'books', component: BooksContainerComponent, children: [
      { path: ':id', component: BookEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
