import { NgModule } from '@angular/core';
import { LoginTemplateComponent } from './login-template.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [LoginTemplateComponent],
  exports: [LoginTemplateComponent]
})
export class LoginTemplateModule { }
