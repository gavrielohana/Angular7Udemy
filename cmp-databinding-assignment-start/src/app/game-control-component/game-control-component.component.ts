import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control-component',
  templateUrl: './game-control-component.component.html',
  styleUrls: ['./game-control-component.component.css']
})
export class GameControlComponentComponent implements OnInit {
  @Output() gameStartStop = new EventEmitter<{gameStatus:boolean}>();

  constructor() { }

  ngOnInit() {
  }


  onStartGame() {
    this.gameStartStop.emit({gameStatus:true});
  }
  onStopGame() {
    this.gameStartStop.emit({gameStatus:false});
  }
}
