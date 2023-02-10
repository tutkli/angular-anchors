import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoremComponent} from "./lorem.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {AnchorLinkDirective} from "./anchor-link.directive";
import {AnchorsComponent} from "./anchors.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LoremComponent,
    AsyncPipe,
    NgForOf,
    AnchorLinkDirective,
    AnchorsComponent
  ],
  template: `
    <main>
      <h1>Angular Anchors</h1>
      <button (click)="addArticle()">Add new Article</button>
      <div class="container">
        <section>
          <app-lorem *ngFor="let article of (articles | async)" [title]="article.title"></app-lorem>
        </section>
        <aside>
          <app-anchors/>
        </aside>
      </div>
    </main>
  `,
  styles: [`
    main {max-width: 800px; margin: auto}
    .container {display: flex; gap: 1rem;}
    aside {position: relative;}
  `]
})
export class AppComponent {
  articles = new BehaviorSubject<{title: string}[]>([
    {title: 'Lorem ipsum'},
    {title: 'Quisque a velit'},
    {title: 'Aenean sit amet efficitur'},
  ]);

  private _newArticleId = 0;

  addArticle(): void {
    this.articles.next([...this.articles.getValue(), {title: `Article Example ${this._newArticleId}`}]);
    this._newArticleId++;
  }
}
