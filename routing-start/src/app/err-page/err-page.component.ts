import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.css']
})
export class ErrPageComponent implements OnInit {
  errorMessage:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:Data)=>{
      this.errorMessage = data['message'];
    });
  }

}
