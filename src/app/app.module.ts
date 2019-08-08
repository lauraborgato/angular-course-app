import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookListComponent } from './books-container/book-list/book-list.component';
import { BookEditComponent } from './books-container/book-edit/book-edit.component';
import { BookDetailComponent } from './books-container/book-detail/book-detail.component';
import { BookListItemComponent} from './books-container/book-list/book-list-item/book-list-item.component';
import { BookService } from './books-container/book.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoadingSpinnerComponent } from './sheared/loading-spinner/loading-spinner.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ShoppingCardItemComponent } from './shopping-cart/shopping-card-item/shopping-card-item.component';
import { ShoppingCartEditComponent } from './shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { FilterPipe } from './sheared/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BooksContainerComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    BookListItemComponent,
    ShoppingCartComponent,
    LogInComponent,
    LoadingSpinnerComponent,
    ShoppingCardItemComponent,
    ShoppingCartEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [
    BookService, 
    ShoppingCartService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
