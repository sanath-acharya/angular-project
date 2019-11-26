import { SearchComponent } from './../../pages/search/search.component';
import { AddAssociateComponent } from './../../pages/add-associate/add-associate.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminPageComponent } from 'src/app/pages/admin-page/admin-page.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'add',          component: AddAssociateComponent },
    { path: 'search',          component: SearchComponent },
    { path: 'admin',          component: AdminPageComponent }
   
];
