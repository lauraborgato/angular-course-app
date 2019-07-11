import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  editMode: boolean = false;
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.valid);
  }
}
