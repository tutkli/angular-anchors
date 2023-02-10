import {Injectable} from "@angular/core";
import {AnchorElementDirective} from "./anchor-element.directive";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AnchorService {
  private _anchors$ = new BehaviorSubject<AnchorElementDirective[]>([]);

  get anchors$() {
    return this._anchors$.asObservable();
  }

  register(anchor: AnchorElementDirective): void {
    const currentAnchors = this._anchors$.getValue();
    const anchorExists = currentAnchors.find(
      (current: AnchorElementDirective) => anchor.id === current.id
    );
    if (!anchorExists) {
      this._anchors$.next([...currentAnchors, anchor]);
    }
  }

  remove(anchor: AnchorElementDirective): void {
    const currentAnchors = this._anchors$.getValue();
    const nextAnchors = currentAnchors.filter(
      (current: AnchorElementDirective) => current.id !== anchor.id
    );
    this._anchors$.next(nextAnchors);
  }

  scroll(id: string) {
    const currentAnchors = this._anchors$.getValue();
    const anchor = currentAnchors.find((current: AnchorElementDirective) => current.id === id);
    if (anchor) {
      anchor.scroll();
    }
  }
}
