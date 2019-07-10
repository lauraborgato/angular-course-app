import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookLiComponent } from './books-container/book-li/book-li.component';
import { BookListComponent } from './books-container/book-list/book-list.component';
import { BookEditComponent } from './books-container/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BooksContainerComponent,
    BookLiComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
