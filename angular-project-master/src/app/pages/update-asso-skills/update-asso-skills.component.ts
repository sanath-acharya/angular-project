import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { Associate } from 'src/app/model/associate';
import { Skills } from 'src/app/model/skills';
import { LoginService } from 'src/app/service/login.service';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';
import { UserDetailsService } from 'src/app/user-details.service';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-update-asso-skills',
  templateUrl: './update-asso-skills.component.html',
  styleUrls: ['./update-asso-skills.component.scss']
})
export class UpdateAssoSkillsComponent implements OnInit {

  skillUpdateForm: FormGroup;
  submitted = false;
  name = 'Angular 5';
  aid:number
  AssociateSkill:AssociateAndSkills=new AssociateAndSkills("","","","","","",new Associate(0,"", "", "", "", null, "", "", "", ""),new Skills(0,"", ""));
  constructor(private formBuilder: FormBuilder,
    private loginservice:LoginService,
    private associateskillService:AssociateSkillServiceService,
    private Uservice :UserDetailsService,
    private router:Router
    ) { }

  ngOnInit() {
    this.AssociateSkill=this.associateskillService.getAssociteSkillmodel();
    
console.log(this.AssociateSkill)


    this.skillUpdateForm = this.formBuilder.group({
      skillGroup: ['', Validators.required],
      skillName: ['', Validators.required],
      certification: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: ['', Validators.required],
      expierence: ['', Validators.required],
      rating:['',Validators.required]
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
  this.associateskillService.updateAssociateSkillByASid(model).subscribe(response=>{
    this.router.navigate(["/viewSkills"]);

  })
  
 
}

}
