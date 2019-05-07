import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiffComponent } from './diff/diff.component';
import {DataService} from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NodeDisplayerComponent } from './diff/node-displayer/node-displayer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRouting} from './app.routing';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DiffComponent,
    NodeDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
