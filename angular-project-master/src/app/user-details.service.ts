import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
private userid:number;

  constructor() { }
  getuserid(){
    return this.userid;

  }
  setUserid(id:number){
    this.userid=id;
  }
}
