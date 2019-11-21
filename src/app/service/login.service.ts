import { LoginModel } from './../login-model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private http:HttpClient;
  constructor( private httpBackend:HttpBackend,private http:HttpClient) { }


  currrentuser:string=null;
 public  login( loginModel:LoginModel){
   // this.http=new HttpClient(this.httpBackend)
   
    return this.http.post<any>("http://localhost:8098/login",loginModel,{responseType:"json"})
    .pipe(map(user=>{
      if(user){
        // sessionStorage.currentuser=user.email;
        // this.currrentuser=user.email;
      }
      return user;

    }))
  }
  public logout(){
    this.currrentuser=null;
    // sessionStorage.removeItem("currentuser");
  }
}
