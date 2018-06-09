import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginTemplateProperties } from './login-template-properties';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginTemplateService } from './login-template.service';

@Component({
  selector: 'login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit {
  @Input() options: LoginTemplateProperties;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  fromGroup: FormGroup = new FormGroup({});
  user: any = {};
  rememberMe = false;
  btnLabel: string;
  title: string;
  submittedForm = false;

  constructor(private loginTemplateService: LoginTemplateService) {
    this.fromGroup = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    // console.log('options LT', this.options);
  }

  formSubmit(values, valid) {
    this.submittedForm = true;
    if (valid) {
      this.onSubmit.emit(values);
      // this.loginTemplateService.checkLogin(values, this.options);
    }
  }

}
