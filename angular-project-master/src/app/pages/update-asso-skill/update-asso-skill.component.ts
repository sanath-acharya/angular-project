
import { Router } from '@angular/router';
import { UserDetailsService } from './../../user-details.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { LoginService } from 'src/app/service/login.service';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';
import { Associate } from 'src/app/model/associate';
import { Skills } from 'src/app/model/skills';


@Component({
  selector: 'app-update-asso-skill',
  templateUrl: './update-asso-skill.component.html',
  styleUrls: ['./update-asso-skill.component.scss']
})
export class UpdateAssoSkillComponent implements OnInit {
  skillUpdateForm: FormGroup;
  submitted = false;
  name = 'Angular 5';
 
  AssociateSkill:AssociateAndSkills;
  // =new AssociateAndSkills("","","","","","",null,null);
  constructor(private formBuilder: FormBuilder,
    private loginservice:LoginService,
    private associateskillService:AssociateSkillServiceService,
    private Uservice :UserDetailsService,
    private router:Router
    ) { }

  ngOnInit() {
    this.AssociateSkill=this.associateskillService.getAssociteSkillmodel();
    



    this.skillUpdateForm = this.formBuilder.group({
      certification: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      expierence: ['', Validators.required],
//     password: ['', [Validators.required, Validators.minLength(6)]],
      //  expertise: [null, Validators.required]
   });
  }

  get f() { return this.skillUpdateForm.controls; }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.skillUpdateForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillUpdateForm.value, null, 4));
}              
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}


onUpdateChange(model){
let aaid=sessionStorage.getItem('id')
let aid= +aaid;
console.log(aid);
// console.log("aid  is")
// console.log(this.aid)
// // this.AssociateSkill.
this.associateskillService.updateAssociateSkillByASid(aid,13,model).subscribe(response=>{
  this.router.navigate(["/admin"])
  return response;
  console.log("this is in skill update ts file success")
  },error=>{
    console.log("this is in skill update ts of error")
  }
  )
  

}
}