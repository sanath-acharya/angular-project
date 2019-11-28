import { ResultlistComponent } from './../../pages/resultlist/resultlist.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
     NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ResultlistComponent
    
  ]
})
export class AuthLayoutModule { }
