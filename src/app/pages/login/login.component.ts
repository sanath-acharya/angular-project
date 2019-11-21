import { Router, RouterLink } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { LoginModel } from './../../login-model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private logservice:LoginService,private router:Router) {}
  loginmodel:LoginModel=new LoginModel();
  loginError:string="";

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  onlogin(){
    
    

    this.logservice.login(this.loginmodel).subscribe(
      (response)=>{
      if(response){
        console.log( "this is error");
        this.router.navigateByUrl("/dashboard");
      }
        
       },
       (error)=>{
         console.log(error);
         this.loginError="Invalid username or password";
    });
  }

}
