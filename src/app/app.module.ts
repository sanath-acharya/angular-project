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
   

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FilterPipe,
    AddSkillComponent
   
  
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorService,
      multi:true
    },{
      provide:HTTP_INTERCEPTORS,
      useClass:JwtUnAuthorizedInterceptorServiceService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
