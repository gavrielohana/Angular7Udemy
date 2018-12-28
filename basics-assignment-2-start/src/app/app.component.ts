import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  enableButton: boolean = false;

  onEditUserName() {
    this.enableButton = this.userName.length > 0;
  }

  onResetUser() {
    this.userName = "";
    this.enableButton = false;
  }
}
