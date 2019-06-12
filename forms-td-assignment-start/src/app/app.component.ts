import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('form') form:NgForm;
  subscriptions:string[] = ['Basic','Advanced','Pro'];
  defaultSubscription = 'Advanced';
  submited:boolean=false;

  frmControls = {
    mail:'',
    subscription: '',
    password: ''
  }

  onSubmit(form:NgForm){
    this.submited = true;
    this.frmControls.mail = this.form.value.mail;
    this.frmControls.password = this.form.value.password;
    this.frmControls.subscription = this.form.value.subscription;
    this.form.reset();
  }



}