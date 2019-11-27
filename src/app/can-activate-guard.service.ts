import { LoginservService } from './../../../postingdata/src/app/loginserv.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService {

  constructor(private loginsevice:LoginservService,private router:Router ) { }
}
