import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  @Input() colorBase: string;
  @Input('appResaltar') resaltarColor: string;

  @HostListener('mouseenter') onmouseEnter() {
    this.resaltar(this.resaltarColor || this.colorBase || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar(null);
  }

  constructor(private element: ElementRef) { }

  resaltar(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
