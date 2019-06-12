import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
 
  user1Activated: boolean = false;
  user2Activated: boolean = false;

  UASubs:Subscription ;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
     this.UASubs =  this.usersService.userActivated.subscribe((id: number) => {
      if (id === 1)
        this.user1Activated = true;
      else
        this.user2Activated = true;
    })
  }

  ngOnDestroy(): void {
    console.log("Bye bye");
    debugger;
    this.UASubs.unsubscribe();
  }
}
