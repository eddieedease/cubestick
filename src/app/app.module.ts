import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
import {
  SiteComponent
} from './site/site.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  HttpModule,
  JsonpModule
} from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';

import {
  SerserService
} from './serser.service';


const appRoutes: Routes = [
  { path: 'site', component:   SiteComponent
},
  { path: '',
    redirectTo: '/site',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  providers: [SerserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
