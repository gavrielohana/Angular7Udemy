import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServcie } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers:[CounterService]
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];
  counter:number;


  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.counter= this.counterService.counter;
  }

  constructor(private usersService: UsersServcie,private counterService:CounterService) {

  }


  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.counter =  this.counterService.increaseCounter();

  }
}
