import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { profileEnd } from 'console';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestResetPasswordComponent } from './components/password/request-reset-password/request-reset-password.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: NavbarComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'password-reset', component:RequestResetPasswordComponent},
  {path: 'reset-response', component:ResponseResetComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
