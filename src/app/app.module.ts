import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NtcComponent } from './components/ntc/ntc.component';

//Services
import { GetColorsService} from './services/get-colors.service';

//NGX
import { AlertModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

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
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AlertModule.forRoot(), //ngx
    TypeaheadModule.forRoot(), //ngx
    ButtonsModule.forRoot() //ngx
  ],
  providers: [
    GetColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
