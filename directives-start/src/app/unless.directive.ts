import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  
  //Directive that will show the element only if the condition is false
  //Get the condition as an input
  //Whenever this property value change , we want to execute a method, so we turn this property to a
  //setter  
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }

  }

  // the first parameter is the ng-template behind the scene , its type of TemplateRef
  // The second parameter is the view container (where to view it) type of ViewContainerRef
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
