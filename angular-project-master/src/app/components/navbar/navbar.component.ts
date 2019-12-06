import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { Associate } from 'src/app/model/associate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  associate:Associate;
  type=""
  admin:string
  constructor(location: Location,  private element: ElementRef, private router: Router,
    private AssociateService:AddAssociateService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.type=sessionStorage.getItem('type');
    let id=sessionStorage.getItem("id")
    let iid=+id;
    console.log(this.type);
    if(this.type == "admin"){
      this.admin="admin"
    
    }else{
      this.AssociateService.getAssociatebyId(iid).subscribe(response=>{

        this.associate= response;
      })
      this.admin="employee"
        // this.admin=this.associate.associateFirstName;
    }

  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(){
    sessionStorage.removeItem('type')
    sessionStorage.removeItem('currentUser')
    sessionStorage.removeItem('id')
    this.router.navigate(['login'])
  }
  

}
