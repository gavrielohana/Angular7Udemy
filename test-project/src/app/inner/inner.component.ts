import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Input() stam: number;

  constructor() { }

  ngOnInit() {
    //this.stam=6;
  }

}
