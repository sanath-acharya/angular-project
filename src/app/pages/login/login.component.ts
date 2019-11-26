import { Router, RouterLink } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { LoginModel } from '../../model/login-model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private logservice:LoginService,private router:Router) {}
  loginmodel:LoginModel=new LoginModel("","");
  loginError:string="";
  currentuser:string="";
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }
  onlogin(model){
    console.log("Before Login")
    console.log(model);

    this.logservice.login(model).subscribe(
      response=>{
    //  var res=response.json();
        console.log(response);
        if(response!=null){
          this.router.navigateByUrl("/tables");
        }
       
      //  return response;
        
       });
  }

}
