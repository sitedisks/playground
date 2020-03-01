import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppNot]'
})
export class AppNotDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appNet(condition: boolean){
  
    if(!condition){

      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
   
      this.viewContainer.clear();
    }
  }

}
