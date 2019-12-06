import { UserDetailsService } from './user-details.service';
import { HomeComponent } from './../../../../service/src/app/home/home.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { JwtUnAuthorizedInterceptorServiceService } from './jwt-un-authorized-interceptor-service.service';
import { AddAssociateComponent } from './pages/add-associate/add-associate.component';
import { SearchComponent } from './pages/search/search.component';
import { FilterPipe } from './filter-pipe';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddSkillComponent } from './pages/add-skill/add-skill.component';

import {CountriesService} from './service/countries.service';
import { SkillupdateComponent } from './pages/skillupdate/skillupdate.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ViewAssociateComponent } from './pages/view-associate/view-associate.component';
import { EditAssociateComponent } from './pages/edit-associate/edit-associate.component';
import { ResultlistComponent } from './pages/resultlist/resultlist.component';
import { LoginComponent } from './pages/login/login.component';
import { TablesComponent } from './pages/tables/tables.component';

import{ RatingModule } from  'ng-starrating';
import { ViewAssociateSkillsComponent } from './pages/view-associate-skills/view-associate-skills.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UpdateAssoSkillsComponent } from './pages/update-asso-skills/update-asso-skills.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RatingModule,
    NgxPaginationModule
   

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FilterPipe,
    LandingComponent,
    HomeComponent,
    ResultlistComponent,
    LoginComponent,
    AdminPageComponent,
    AddAssociateComponent,
     AddSkillComponent,
    ViewAssociateComponent,
    EditAssociateComponent,
    SkillupdateComponent
    ,TablesComponent,
     ViewAssociateSkillsComponent,
     UserProfileComponent,
     
     UpdateAssoSkillsComponent
 
    
   
  
    
  ],
  exports:[
    LandingComponent
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorService,
      multi:true
    },UserDetailsService
    // ,

    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:JwtUnAuthorizedInterceptorServiceService,
    //   multi:true
    // }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
