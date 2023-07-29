import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import {ReactiveFormsModule  } from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
   
    HomeComponent,
RegisterComponent,
LoginComponent,
NavbarComponent
  ]
})
export class AuthModule { }
