import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NtcComponent } from './components/ntc/ntc.component';

//NGX
import { AlertModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

const appRoutes: Routes = [
  { path: 'ntc', component: NtcComponent },
  { path: '',
    redirectTo: '/ntc',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NtcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AlertModule.forRoot(), //ngx
    TypeaheadModule.forRoot() //ngx
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
