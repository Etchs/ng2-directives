import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @Input('defaultColor') defaultColor: string = 'blue';
  @Input('dirHighlight') hoverColor: string = 'green';

  private eRef: ElementRef;
  private bgColor: string;

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mousein(){
    this.bgColor = this.hoverColor;
    // this.renderer.setElementStyle(this.eRef.nativeElement,'background-color', this.hoverColor);
  };

  @HostListener('mouseleave') mouseout(){
    this.bgColor = this.defaultColor;
    // this.renderer.setElementStyle(this.eRef.nativeElement,'background-color', this.defaultColor);
  };

  @HostListener('click', ['$event']) mouseclick(e) {
    console.dir(e);
    console.log(e.target);
    this.bgColor = this.defaultColor;
    // this.renderer.setElementStyle(this.eRef.nativeElement,'background-color', this.defaultColor);
  };

  @HostBinding('style.backgroundColor') get currentColor() {
    return this.bgColor;
  };

  constructor(elementRef: ElementRef, private renderer: Renderer) {
    this.eRef = elementRef;
    // this.eRef.nativeElement.style.backgroundColor = 'blue';
    this.renderer.setElementStyle(this.eRef.nativeElement,'background-color', this.bgColor);
  }

}
