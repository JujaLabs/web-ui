import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[appShowWhenScroll]'
})
export class ScrollDirective {

  constructor(@Inject(DOCUMENT) private document: Document,
              private element: ElementRef) {
  }

  @HostListener('window:scroll')
  onGlobalScroll() {
    const showElement =
      this.document.body.scrollTop > 20
      || this.document.documentElement.scrollTop > 20;
    this.element.nativeElement.style.display = showElement ? 'block' : 'none';
  }

  @HostListener('click')
  onButtonClick() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
