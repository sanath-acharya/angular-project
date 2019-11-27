
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService {

  constructor(private router:Router ) { }
}
