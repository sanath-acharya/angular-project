import { AssociateAndSkills } from './../../../../../../argon-dashboard-angular-master/src/app/model/associate-and-skills';
import { Associates } from './../../associates';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { LoginModel } from '../../model/login-model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssociateLoginModel } from 'src/app/model/associate-login-model';
import { pipe } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  constructor( private logservice:LoginService,
    private router:Router,private formBuilder: FormBuilder) {}
errorstring=""
loginForm: FormGroup;
submitted = false;
  loginmodel:LoginModel=new LoginModel("","");

  associatemodel:AssociateLoginModel=new AssociateLoginModel("","",);

  loginError:string="";
 
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(4)]]
   });
  }
  
  ngOnDestroy() {
  }
  refresh(){
    window.location.reload();
  }
  get f() { return this.loginForm.controls; }

  onlogin(model,model2){
   
    console.log("Before Login")
    console.log(model);
    console.log("inside ts Login")
    this.errorstring=""

    
    this.logservice.login(model).subscribe(
      
      response=>{
    //  var res=response.json();
        // console.log(response);
        
        if(response!=null){

          sessionStorage.setItem('type','admin')
         
          this.router.navigate(['/admin']);

        }
        else{


          this.logservice.loginAssociate(model2).subscribe(response=>{
            console.log("Inside Emplyee LoGIN")
            console.log(response)
            if(response){
              sessionStorage.setItem('type','employee')
              
              this.router.navigate(['/admin']);
            }else{
              this.errorstring="Invalid Credentials! Please try again"
              sessionStorage.removeItem('currentUser')
              console.log("null after associate login ")
            }
            
          },(error)=>{
            sessionStorage.removeItem('currentUser')
            alert("invalid username and passoword")

          })
        }
       
       return response;
        
       },(error)=>{
        console.log("in login ts")
        sessionStorage.removeItem('currentUser')
         console.log(error)
         console.log("after ts")

       });

  }

  onSubmit(model,model2) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
 this.onlogin(model,model2);
    }

    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
 


}
