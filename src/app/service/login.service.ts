import { Associates } from './../associates';
import { LoginModel } from '../model/login-model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Associate } from '../model/associate';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private http:HttpClient;
  constructor( private httpBackend:HttpBackend,
    private http:HttpClient
    // private JwtHelperService:JwtHelperService
    ) { }


  currrentuser:string=null;
 public  login( loginModel:LoginModel):Observable<any>
 {
   // this.http=new HttpClient(this.httpBackend)
   
    return this.http.post<LoginModel>("http://localhost:8098/api/login",loginModel)
    .pipe(map(user =>{
        // var res=user.json();
 
      if(user){
        // sessionStorage.currentuser=user.email;
        this.currrentuser=user.userEmail;
      }
      // console.log(user.userEmail+"hlleodsafjh");
      return user;

    }
    ));
  }
  public  loginAssociate( loginModel:LoginModel):Observable<any>
 {
   // this.http=new HttpClient(this.httpBackend)
   console.log("inside the login service of associatae")
    return this.http.post<Associate>("/api/login",loginModel)
    .pipe(map(user =>{
        // var res=user.json();
        console.log("return from  login service of associatae from spring")
      if(user){
        // sessionStorage.currentuser=user.email;
        // this.currrentuser=user.associateEmail;
        console.log(user)
      }
      // console.log(user.userEmail+"hlleodsafjh");
      return user;

    }
    ));
  }


  public logout(){
    this.currrentuser=null;
    // sessionStorage.removeItem("currentuser");
  }

//   // public isAuthenticated():boolean{
//   //   var token=sessionStorage.getItem("currentuser")?JSON.parse(sessionStorage.getItem("currentUser")).token:null;
//   //   if(this.JwtHelperService.isTokenExpired()){
//   //     return false;

//   //   }else{
//   //     return true;
//   //   }
//   // }
// }
}