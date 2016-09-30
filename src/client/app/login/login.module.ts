import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {AuthService} from '../shared/services/auth.service';
import {AuthGuard} from '../shared/services/auth-guard.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule { }
