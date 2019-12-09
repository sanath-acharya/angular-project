import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPass: FormGroup;
  email_id:string;
  constructor(private formBuilder:FormBuilder,
    private loginservice:LoginService,
    private router:Router) { }

  ngOnInit() {

    
  }

  osubmit(){
    console.log("thiis is anlkdsfkajdljfasdfurfhsef")
    console.log(this.email_id)
    this.loginservice.forgotPass(this.email_id).subscribe(response=>{
      alert("password has been sent to mail...")
      this.router.navigate(['/login']);

    })
  }

}

