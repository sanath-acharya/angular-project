import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      userName:new FormControl(null),
      password:new FormControl(null),
      email:new FormControl(null),
      skills:new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value)=>{
        //auto submit after some time complete

        console.log(value);
      }
    )
    
  }
  
  onaddSkills(){
    var formgroup=new FormGroup({
      skillName:new FormControl(null),
      level:new FormControl(null)
    });

    (<FormArray>this.signupForm.get("skills")).push(formgroup);
  }
  onSubmitClick(){
    console.log(this.signupForm.value);
    //set
    //patch
    //reset
  }

}
