import { AddSkillComponent } from './../../pages/add-skill/add-skill.component';
import { SearchComponent } from './../../pages/search/search.component';
import { AddAssociateComponent } from './../../pages/add-associate/add-associate.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminPageComponent } from 'src/app/pages/admin-page/admin-page.component';
import { ViewAssociateComponent } from 'src/app/pages/view-associate/view-associate.component';
import { EditAssociateComponent } from 'src/app/pages/edit-associate/edit-associate.component';
import { SkillupdateComponent } from 'src/app/pages/skillupdate/skillupdate.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'viewAssociate',          component: AddAssociateComponent },
    { path: 'search',          component: SearchComponent },
    { path: 'admin',          component: AdminPageComponent },
    { path: 'addSkills',          component: AddSkillComponent },
    { path: 'addAssociate',          component: ViewAssociateComponent},
    { path: 'editAssociate',          component: EditAssociateComponent},
    { path: 'skillupdate',          component: SkillupdateComponent}
];
