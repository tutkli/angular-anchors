import {AfterViewInit, Directive, ElementRef, HostListener, inject, Input, OnDestroy, OnInit} from "@angular/core";
import {AnchorService} from "./anchor.service";

@Directive({
  selector: '[appAnchorElement]',
  standalone: true,
})
export class AnchorElementDirective implements OnInit, OnDestroy {
  @Input('appAnchorElement') id!: string;
  active: boolean = false;
  private _anchorService = inject(AnchorService);

  constructor(private element: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.element.nativeElement) {
      const rect = this.element.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.active = topShown && bottomShown;
    }
  }

  ngOnInit(): void {
    this._anchorService.register(this);
  }

  ngOnDestroy(): void {
    this._anchorService.remove(this);
  }

  scroll(): void {
    this.element.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
