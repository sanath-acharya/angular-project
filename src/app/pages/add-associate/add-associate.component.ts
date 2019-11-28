import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';
import { Router } from '@angular/router';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.scss']
})
export class AddAssociateComponent implements OnInit {
  private Associateinfo: Associate[] ;
  searchText="";
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  private AssociateModel: Associate = new Associate("", "", "", "", null, "", "", "", "");
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
  constructor(
    private AssociateService:AddAssociateService,
    
    private router: Router,
    private addAssociate: AddAssociateService,
    private fb: FormBuilder,
    private country: CountriesService
  ) { }

  addAssociateForm: FormGroup;
  genders = ["male", "female"];


  ngOnInit() {



    this.AssociateService.getAssociate().subscribe(
      response=>{
      // console.log(response);
      // if(response!=null){
         
         
        //  this.usersJson= Array.of(response);
        console.log(response)
        //  console.log( this.usersJson)
        //  console.log(this.usersJson[0][0])
        this.Associateinfo=response;

      }
    );








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





  onRegister(Amodel) {

    this.addAssociateForm["submitted"] = true;
    console.log("Inside register")
    console.log(this.addAssociateForm);

    this.addAssociate.addAssociate(Amodel).subscribe(response => {

    });
    alert("Sucessfull")


  }

  onSearchClick(){
    this.AssociateService.searchby(this.searchText).subscribe(
      (response)=>{
        console.log(response);
        console.log("this is inside onsearch funtion");
        this.Associateinfo=response;

        console.log(Array.of(response));
        this.router.navigateByUrl['/admin']

        // console.log(this.searchresult)
        
      },(error)=>{
        console.log(error);
      }
    );
  
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












