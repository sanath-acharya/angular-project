import { AddSkillComponent } from './../../pages/add-skill/add-skill.component';
import { SearchComponent } from './../../pages/search/search.component';
import { AddAssociateComponent } from './../../pages/add-associate/add-associate.component';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPageComponent } from 'src/app/pages/admin-page/admin-page.component';
import { JwtInterceptorService } from 'src/app/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorServiceService } from 'src/app/jwt-un-authorized-interceptor-service.service';
// import { ToastrModule } from 'ngx-toastr';
import{JwtModule} from '@auth0/angular-jwt';
import { CountriesService } from 'src/app/service/countries.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:()=>{
    //       return (sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUesr")).token:null);
    //     }
    //   }
    // })
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    AddAssociateComponent,
    SearchComponent,
    AdminPageComponent,
    AddSkillComponent
    
  ],
  providers: [ CountriesService
    
  ]
})

export class AdminLayoutModule {}
