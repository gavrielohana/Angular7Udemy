import { Component, OnInit } from '@angular/core';
import { UsersServcie } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];
  counter: number;


  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.counter = this.counterService.counter;
  }
  constructor(private usersService: UsersServcie, private counterService: CounterService) { }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counter =  this.counterService.increaseCounter();
  }
}
