import { AdminPageComponent } from 'src/app/pages/admin-page/admin-page.component';

import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ResultlistComponent } from './pages/resultlist/resultlist.component';
import { LoginComponent } from './pages/login/login.component';
import { AddAssociateComponent } from './pages/add-associate/add-associate.component';
import { ViewAssociateComponent } from './pages/view-associate/view-associate.component';
import { AddSkillComponent } from './pages/add-skill/add-skill.component';
import { SkillupdateComponent } from './pages/skillupdate/skillupdate.component';
import { EditAssociateComponent } from './pages/edit-associate/edit-associate.component';
import { CanActivateGuardService } from './can-activate-guard.service';
import { TablesComponent } from './pages/tables/tables.component';
import { ViewAssociateSkillsComponent } from './pages/view-associate-skills/view-associate-skills.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UpdateAssoSkillsComponent } from './pages/update-asso-skills/update-asso-skills.component';

// const routes: Routes =[
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   } 
//   ,{
//     path: '',
//     component: AdminLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
//       }
//     ]
//   }, {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
//       }
//     ]
//   },
//   {
//     path:'**' ,redirectTo: 'dashboard',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes =[
  {
    path:'',
    component:LandingComponent
  },
    
      {
        path:'search/:id',
        component:ResultlistComponent
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'admin',
      component:AdminPageComponent,
      canActivate:[CanActivateGuardService]
      
        
    },{
      path:'userprofile',
      component:UserProfileComponent,
      canActivate:[CanActivateGuardService]
    }
    ,{
      path:'viewAssociate',
      component:AddAssociateComponent,
      canActivate:[CanActivateGuardService]
    },
    {
      path:'addAssociate',
      component:ViewAssociateComponent,
      canActivate:[CanActivateGuardService]
    },{
    path:'addSkills',
    component:AddSkillComponent,
    canActivate:[CanActivateGuardService]
  },{
    path:'editAssociate',
    component:EditAssociateComponent,
    canActivate:[CanActivateGuardService]
  },{
    path:'table',
    component:TablesComponent
    // canActivate:[CanActivateGuardService]
  },
  {
    path:'viewSkills',
    component:ViewAssociateSkillsComponent,
    canActivate:[CanActivateGuardService]
  }, {
    path:'EditSkills',
    component:SkillupdateComponent,
    canActivate:[CanActivateGuardService]
  },
  {
    path:'updateAssociateSkils',
    component:UpdateAssoSkillsComponent,
    canActivate:[CanActivateGuardService]
}
  

]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
