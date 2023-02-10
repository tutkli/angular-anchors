import {Directive, HostListener, inject, Input} from "@angular/core";
import {AnchorService} from "./anchor.service";

@Directive({
  selector: '[appAnchorLink]',
  standalone: true,
})
export class AnchorLinkDirective {
  @Input('appAnchorLink') id!: string;

  private _anchorService = inject(AnchorService);

  @HostListener('click')
  scroll() {
    this._anchorService.scroll(this.id);
  }
}
