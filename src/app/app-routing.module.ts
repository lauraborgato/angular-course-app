import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksContainerComponent } from './books-container/books-container.component';
import { BookDetailComponent } from './books-container/book-detail/book-detail.component';
import { BookResolverService } from './books-container/book-resolver.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { BookEditComponent } from './books-container/book-edit/book-edit.component';
import {AuthGuard} from './log-in/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books', component: BooksContainerComponent, children: [
      { path: 'new', component: BookEditComponent, canActivate:[AuthGuard] },
      { path: ':id', component: BookDetailComponent, resolve: [BookResolverService] },
      { path: ':id/edit', component: BookEditComponent, resolve: [BookResolverService], canActivate:[AuthGuard]}
    ]
  },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
