import { AddAssociateService } from './../../service/add-associate.service';
import { Associate } from './../../model/associate';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  debugger;
  private AssociateModel:Associate=new Associate("","","","" ,0,"" ,"","","");
  constructor(
    
    private router:Router,
    private addAssociate: AddAssociateService,
    private fb:FormBuilder
    ) { }
  
  addAssociateForm:FormGroup;
    genders=["male","female"];
    
  
  ngOnInit() {
    debugger;
    this.addAssociateForm=this.fb.group({
       
     associateFirstName:[null,Validators.required,
   Validators.minLength(2)
    ],
    associateLastName:[null,Validators.required,
      Validators.minLength(2)
       ],

    associateEmail:[null,Validators.email],
     password:[null,Validators.required],
     associateMobile:[null,Validators.required],
     dob:[null,Validators.required],
     gender:[null,Validators.required],
     location:[null,Validators.required],
     country:[null,Validators.required],
   
      // skills:this.fb.array([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     //auto submit after some time complete

    //     console.log(value);
    //   }
    // )
    
  }

  //  onaddSkills(){
  //    var formgroup=new FormGroup({
  //      skillName:new FormControl(null),
  //      level:new FormControl(null)
  //    });
  //  (<FormArray>this.signupForm.get("skills")).push(formgroup);
  //  }
  //  onSubmitClick(){
  //    console.log(this.signupForm.value);
  //    //set
  //    //patch
  //    //reset
  //  }

  onRegister(Amodel){
    //console.log("heleloeoefh");
   //  console.log(Amodel.password);
   this.addAssociateForm["submitted"]=true;
   console.log(this.addAssociateForm);

   this.addAssociate.addAssociate(Amodel).subscribe(response=>{
       // if(response!=null){

         // this.router.navigateByUrl("/dashboard")
       // }
//console.log(Amodel);
     });
     alert("Sucessfull")

    // (<FormArray>this.signupForm.get("skills")).push(formgroup);
  }
  // onSubmitClick(){
  //   console.log(this.signupForm.value);
  //   //set
  //   //patch
  //   //reset
  // }
}