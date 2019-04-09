import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;

  constructor() { }

  @HostListener('mouseenter')
  mouseenter() {
    console.log(this.date);
  }

  @HostListener('mouseleave')
  mouseleave() {
    console.log(this.date);
  }
}
