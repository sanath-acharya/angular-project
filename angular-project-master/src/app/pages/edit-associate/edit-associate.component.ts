
import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';
import { Validators, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { CountriesService } from 'src/app/service/countries.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-edit-associate',
  templateUrl: './edit-associate.component.html',
  styleUrls: ['./edit-associate.component.scss']
})


export class EditAssociateComponent implements OnInit {
  private AssociateModel: Associate = new Associate(0,"", "", "", "", null, "", "", "", "");
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  addAssociateForm: FormGroup;
  genders = ["male", "female"];
  p:number=1;

  constructor(
    private AssociateService:AddAssociateService,
    
    private router: Router,
    private addAssociate: AddAssociateService,
    private fb: FormBuilder,
    private country: CountriesService
  ) { }
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

    }, 'associateMobile': {
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
    'country': '',
    'state':''

  };
  ngOnInit() {
    this.AssociateModel= this.AssociateService.getModalofEdit();
    
    this.getCountries();
    this.addAssociateForm = this.fb.group({

      associateFirstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      associateLastName: [null, [Validators.required]],

      associateEmail: ['', [Validators.required, emailDomain]],
      password: [null, Validators.required],
      associateMobile: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      location: [null, Validators.required],
      country: [null, [Validators.required]],

      // skills:this.fb.array([])
    });
  }

  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log(this.countryInfo)
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
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





  onUpdate(Amodel) {

    this.addAssociateForm["submitted"] = true;
    console.log("Inside register")
    console.log(this.addAssociateForm);

    this.addAssociate.updateAfterEdit(Amodel).subscribe(response=>{
      console.log(response)
      this.router.navigateByUrl("/viewAssociate");
    
    },(error)=>{
      console.log(error);
     
    });
    
    // .subscribe(response => {
    //   this.router.navigateByUrl("/viewAssociate");
    // });
    


  }

}
function emailDomain(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (email === '' || domain.toLowerCase() === 'gmail.com') {
    return null;

  } else {
    return { 'emailDomain': true };
  }
}
