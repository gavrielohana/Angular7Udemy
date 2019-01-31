import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gameStatus: boolean;
  counter: number;
  stopCounter;
  numbers:number[]=[];

  ngOnInit(): void {
    this.resetCounter();
  }

  resetCounter() {
    this.counter = 0;
  }

  gameStatusChanged(status: { gameStatus: boolean }) {
    this.gameStatus = status.gameStatus;

    if (this.gameStatus == true) {
      this.stopCounter = setInterval(() => {
        this.counter++;
        this.numbers.push(this.counter);
       }, 1000

      )
    }
    else {
      clearInterval(this.stopCounter)
      this.numbers = [];
      this.counter = 0;
    }
  }

}
