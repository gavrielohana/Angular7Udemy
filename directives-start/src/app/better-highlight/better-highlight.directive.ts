import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor:string="transparent";

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor="blue";
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor="transparent";
  }
}
