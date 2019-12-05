import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { Associate } from 'src/app/model/associate';
import { AddAssociateService } from 'src/app/service/add-associate.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  id;
  associate:Associate;
  associateSkills:AssociateAndSkills[];
  p:number=1;
  constructor(private router:ActivatedRoute,
    private associateSkill:AssociateSkillServiceService,
    private associateSerivice:AddAssociateService) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.id=params.id
     
    } );
    // this.userType = this.router.snapshot.queryParamMap.get("userType");
    // this.router.queryParams.id
    let iid= +this.id;
    console.log(iid)
    this.getdata(iid)

  }
  
 getdata(aid){
  this.associateSkill.getALLAssociateSkillsById(aid).subscribe(response=>{
    this.associateSkills=response;
    console.log(this.associateSkills)
  })

  this.associateSerivice.getAssociatebyId(aid).subscribe(response=>{
    this.associate=response;
  })
 }
}
