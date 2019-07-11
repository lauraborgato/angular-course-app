import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookListComponent } from './books-container/book-list/book-list.component';
import { BookEditComponent } from './books-container/book-edit/book-edit.component';
import { BookDetailComponent } from './books-container/book-detail/book-detail.component';
import { BookListItemComponent} from './books-container/book-list/book-list-item/book-list-item.component';
import { BookService } from './books-container/book.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BooksContainerComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    BookListItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
