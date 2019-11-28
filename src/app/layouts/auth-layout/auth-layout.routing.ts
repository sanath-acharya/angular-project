import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { ResultlistComponent } from 'src/app/pages/resultlist/resultlist.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'landing',       component: LandingComponent },
    { path: 'home',       component: ResultlistComponent }
];
