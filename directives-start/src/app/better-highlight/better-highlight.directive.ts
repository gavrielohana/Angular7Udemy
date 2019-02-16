import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() highlightColor : string = 'blue';
  
  @HostBinding('style.backgroundColor') backgroundColor: string;// = this.defaultColor;


  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
}
