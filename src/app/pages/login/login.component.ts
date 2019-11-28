import { Associates } from './../../associates';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { LoginModel } from '../../model/login-model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssociateLoginModel } from 'src/app/model/associate-login-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  constructor( private logservice:LoginService,private router:Router) {}
  loginmodel:LoginModel=new LoginModel("","");

  associatemodel:AssociateLoginModel=new AssociateLoginModel("","",);

  loginError:string="";
  currentuser:string="";
  ngOnInit() {
  }
  
  ngOnDestroy() {
  }
  onlogin(model,model2){
    console.log("Before Login")
    console.log(model);
    console.log("inside ts Login")
    this.logservice.login(model).subscribe(
      response=>{
    //  var res=response.json();
        // console.log(response);
        
        if(response!=null){
          this.router.navigateByUrl("/admin");
        }else{


          this.logservice.loginAssociate(model2).subscribe(response=>{
            
            if(response!=null){
              console.log("success ")
              this.router.navigateByUrl("/employee");
            }else{
              console.log("null after associate login ")
            }
            
          },(error)=>{
            alert("invalid username and passoword")

          })
        }
       
      //  return response;
        
       });
  }

}
