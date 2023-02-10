import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {AnchorService} from "./anchor.service";
import {Observable} from "rxjs";
import {AnchorElementDirective} from "./anchor-element.directive";
import {AsyncPipe, NgForOf} from "@angular/common";
import {AnchorLinkDirective} from "./anchor-link.directive";

@Component({
  selector: 'app-anchors',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    AnchorLinkDirective
  ],
  template: `
    <ul>
      <li *ngFor="let anchor of (anchors$ | async)"
          [appAnchorLink]="anchor.id"
          [class.active]="anchor.active">
        <p>{{ anchor.id }}</p>
      </li>
    </ul>
  `,
  styles: [`
    ul {position: sticky; top: 0; padding-top: 2rem; min-width: 175px}
    li {cursor: pointer}
    .active {
      font-weight: bold;
    }
  `]
})
export class AnchorsComponent {
  private _anchorService = inject(AnchorService);

  get anchors$(): Observable<AnchorElementDirective[]> {
    return this._anchorService.anchors$;
  }
}
