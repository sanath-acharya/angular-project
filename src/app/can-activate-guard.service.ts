import { LoginService } from './service/login.service';

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {
 canActivate():boolean{
   if(sessionStorage.getItem("currentUser")&&sessionStorage.getItem('type')) 
   {
    return true;
   }else{
     console.log("inside authguard elseee...")
     this.router.navigate(['login'])
    
   }
 

 }

  constructor(private router:Router ) { }
}
