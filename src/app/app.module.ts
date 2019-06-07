import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiffComponent } from './diff/diff.component';
import {DataService} from './services/data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NodeDisplayerComponent } from './diff/node-displayer/node-displayer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRouting} from './app.routing';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';
import {LoadingScreenInterceptor} from './shared/LoadingScreenInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    DiffComponent,
    NodeDisplayerComponent,
    HeaderComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [DataService
    // ,
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: LoadingScreenInterceptor,
    // multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
