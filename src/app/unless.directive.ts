import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {

  @Input('dirUnless') set forwardValue(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tRef)
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
