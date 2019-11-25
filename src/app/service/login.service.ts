import { LoginModel } from '../model/login-model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private http:HttpClient;
  constructor( private httpBackend:HttpBackend,private http:HttpClient) { }


  currrentuser:string=null;
 public  login( loginModel:LoginModel):Observable<any>
 {
   // this.http=new HttpClient(this.httpBackend)
   
    return this.http.post<LoginModel>("http://localhost:8098/login",loginModel)
    .pipe(map(user =>{
        // var res=user.json();
 
      if(user){
        // sessionStorage.currentuser=user.email;
        this.currrentuser=user.userEmail;
      }
      // console.log(user.userEmail+"hlleodsafjh");
      return user;

    }));
  }
  public logout(){
    this.currrentuser=null;
    // sessionStorage.removeItem("currentuser");
  }
}
