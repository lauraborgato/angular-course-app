import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../log-in/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  
  onLogOut(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
