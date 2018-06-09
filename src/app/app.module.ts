import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginTemplateModule } from 'projects/login-template/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
