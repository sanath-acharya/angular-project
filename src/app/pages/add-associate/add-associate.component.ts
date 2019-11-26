import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';
import { Router } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.scss']
})
export class AddAssociateComponent implements OnInit {

  private AssociateModel: Associate = new Associate("", "", "", "",null, "", "", "", "");
  validationMessages = {
    'associateFirstName': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be greater than 2 charactors',
      'maxlength': 'First Name must be less than 10 charecters.'
    },
    'associateLastName': {
      'required': 'Last name is required'

    },
    'associateEmail': {
      'required': 'Email is required',
      'emailDomain': 'email should be gmail.com'

    },'associateMobile': {
      'required': 'mobile number is required'

    },

    
    'password': {
      'required': 'Password is required'

    },

    'dob': {
      'required': 'date of birth is required'

    },
    'gender': {
      'required': 'gender is required'

    }, 'location': {
      'required': 'location is required'

    }, 'country': {
      'required': 'contry is required'

    }
  };
  forErrors = {

    'associateFirstName': '',
    'associateLastName': '',
    'associateEmail': '',
    'password': '',
    'dob': '',
    'gender': '',
    'location': '',
    'country': ''

  };
  constructor(

    private router: Router,
    private addAssociate: AddAssociateService,
    private fb: FormBuilder
  ) { }

  addAssociateForm: FormGroup;
  genders = ["male", "female"];


  ngOnInit() {

    this.addAssociateForm = this.fb.group({

      associateFirstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      associateLastName: [null, [Validators.required]],

      associateEmail: ['', [Validators.required,emailDomain]],
      password: [null, Validators.required],
      associateMobile: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      location: [null, Validators.required],
      country: [null, [Validators.required]],

      // skills:this.fb.array([])
    });


    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     //auto submit after some time complete

    //     console.log(value);
    //   }
    // )
    this.addAssociateForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.addAssociateForm);
        // console.log(this.forErrors);
      }

    );
  }

  logValidationErrors(group: FormGroup = this.addAssociateForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      // console.log(Object.keys(group.controls));
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.forErrors[key] = '';
        // console.log("hello" + abstractControl.value);
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const message = this.validationMessages[key];
          for (const errKey in abstractControl.errors) {
            if (errKey) {
              this.forErrors[key] += message[errKey] + ' ';
              // console.log( this.forErrors[key]);
            }
          }
        }
      }

    });
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

  onRegister(Amodel) {
    //console.log("heleloeoefh");
    //  console.log(Amodel.password);
    this.addAssociateForm["submitted"] = true;
    console.log("Inside register")
    console.log(this.addAssociateForm);

    this.addAssociate.addAssociate(Amodel).subscribe(response => {
      // if(response!=null){

      // this.router.navigateByUrl("/dashboard")
      // }
      //console.log(Amodel);
    });
    alert("Sucessfull")


  }

  


}
function  emailDomain(control:AbstractControl): {[key:string]:any } | null{
  const email:string =control.value;
  const domain=email.substring(email.lastIndexOf('@')+1);
  if(email === '' || domain.toLowerCase() ==='gmail.com'){
    return null;

  }else{
    return {'emailDomain':true};
  }
}