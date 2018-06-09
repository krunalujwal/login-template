import { Component } from '@angular/core';
import { LoginTemplateProperties } from 'projects/login-template/src/lib/login-template-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options: LoginTemplateProperties;

  constructor() {
    this.options = {
      name: 'Krunal Sakharkar',
      btnLabel: 'LOG IN',
      title: 'User Login Form',
      redirectUrl: '/home'
    };
    // console.log('options APP', this.options);
  }
}
