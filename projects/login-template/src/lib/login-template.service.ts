import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginTemplateService {

  constructor() { }

  checkLogin(inputParams, data) {
    console.log('checkLogin', inputParams);
  }
}
