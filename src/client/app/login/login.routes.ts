import {Route} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthGuard} from '../shared/services/auth-guard.service';
import {AuthService} from '../shared/services/auth.service';

export const LoginRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const authProviders = [
  AuthGuard,
  AuthService
];
