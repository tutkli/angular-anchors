import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";


bootstrapApplication(AppComponent, {
  providers: [
    BrowserModule,
  ]
}).catch(err => console.error(err));

