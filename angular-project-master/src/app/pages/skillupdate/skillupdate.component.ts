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
  selector: 'app-skillupdate',
  templateUrl: './skillupdate.component.html',
  styleUrls: ['./skillupdate.component.scss']
})
export class SkillupdateComponent implements OnInit {
  skillUpdateForm: FormGroup;
  submitted = false;
  name = 'Angular 5';
  sid:number;
  aid:number
  skillName:Skills[];
  skill:Skills[];
  skillCategory:string
  skillname:string
  AssociateSkill:AssociateAndSkills=new AssociateAndSkills("","","","","","",new Associate(0,"", "", "", "", null, "", "", "", ""),new Skills(0,"", ""));
  constructor(private formBuilder: FormBuilder, 
    private loginservice:LoginService,
    private associateskillService:AssociateSkillServiceService,
    private Uservice :UserDetailsService,
    private router:Router
    ) { }

  
  ngOnInit() {
    this.getAllSkillCategory();



    this.skillUpdateForm = this.formBuilder.group({
      skillGroup: ['', Validators.required],
      skillName: ['', Validators.required],
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
    }else{
      this.onUpdateChange();

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

sk:Skills=new Skills(0,"","");
onUpdateChange(){
  let aaid=sessionStorage.getItem("id");
  this.aid= +aaid;
  console.log("thi si sisisdfia")
  console.log(this.skillname)
  console.log(this.skillCategory)
  // this.AssociateSkill
// this.Uservice.getuserid();
// console.log(this.AssociateSkill);

console.log("sid  is")
// console.log(this.aid)

this.associateskillService.getSkillfromSkillCategoryAndSkillName(this.skillname,this.skillCategory).subscribe(response=>{
  console.log("thi is dataa")
  console.log(response)
  this.sk=response;
  console.log("this sk form db form skill id")
  console.log(this.sk)
  // this.sid
  this.sid=this.sk['skillId'];
  console.log(this.sid)
  this.addskills();
})
// this.AssociateSkill.
  

}
addskills(){
  this.associateskillService.addToAssociateSkill(this.aid,this.sid,this.AssociateSkill).subscribe(response=>{
    this.router.navigate(["/admin"])
    return response;
    console.log("this is in skill update ts file success")
    },error=>{
      console.log("this is in skill update ts of error")
    }
    )
}

getAllSkillCategory(){
  this.associateskillService.getSkill().subscribe(
    (response)=>{
      this.skill=response;
      console.log(this.skill)
    }
  );
}
getskillName(){
  this.associateskillService.getSkillname(this.skillCategory).subscribe(
    response=>{
       this.skillName=response;   
    })
  }

   
}
