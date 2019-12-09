import { UserDetailsService } from './../user-details.service';
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
  loginmod:LoginModel

  private  currentuserid:number;
  private currentuseremail:string="";


  constructor( private httpBackend:HttpBackend,
    private http:HttpClient,
    private Uservice:UserDetailsService,
    private http1:HttpClient,

    // private JwtHelperService:JwtHelperService
    ) { }
    public getcurrentid(){
      return this.currentuserid;
    }
    public getcurrentuserEmail(){
      return this.currentuseremail;
    }


  currrentuser:string=null;
 public  login( loginModel:LoginModel):Observable<any>
 {
  console.log("Inside Emplyee LoGIN")
   // this.http=new HttpClient(this.httpBackend)
   //sessionStorage.currentUser=JSON.stringify('dummy');
   sessionStorage.setItem('currentUser','dummy');
    return this.http.post<LoginModel>("http://localhost:8098/api/login",loginModel)
    .pipe(map(user =>{
      // console.log("insided the login of employee")
      console.log(user)
        // var res=user.json();
        console.log(user)
        // this.currentuserid=user.associateId;
        // this.currentuseremail=user.userEmail;
      if(user){console.log("inside success full login")
        sessionStorage.currentUser=JSON.stringify(user);
        
        // console.log(sessionStorage.currentUser);
        // this.currrentuser=user.userEmail;
        // sessionStorage.setItem('user',user.userEmail)
        // if(sessionStorage.getItem('user')){

        // }
        
      }
      // console.log(user.userEmail+"hlleodsafjh");
      return user;

    },(error)=>{
      sessionStorage.removeItem('currentUser')
      console.log("in service ts")
      console.log(error)
      console.log("in after service ts")

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
        console.log("insided the login of employee")
        console.log(user)
        // this.currentuserid=user.associateId;
        this.Uservice.setUserid(user.associateId);
        // this.currentuserid=user.associateId;
        //   this.currentuseremail=user.associateEmail;
        let userid=user.associateId;
          let useridS=userid.toString();
          sessionStorage.setItem("id", useridS);

          console.log(this.currentuserid)
          console.log("saved")
        sessionStorage.currentUser=JSON.stringify(user);
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
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("user");
  }

  public forgotPass(email:string){
    console.log("htisk is in service")
    this.http1=new HttpClient(this.httpBackend)
    return this.http1.get("/api/forgotPassword/"+email);
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