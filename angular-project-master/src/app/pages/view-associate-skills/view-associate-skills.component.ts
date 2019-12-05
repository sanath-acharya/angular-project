import { Router } from '@angular/router';
import { UserDetailsService } from './../../user-details.service';
import { Skills } from 'src/app/model/skills';
import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/service/skills.service';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';
import { Associate } from 'src/app/model/associate';
import { LoginService } from 'src/app/service/login.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-view-associate-skills',
  templateUrl: './view-associate-skills.component.html',
  styleUrls: ['./view-associate-skills.component.scss']
})
export class ViewAssociateSkillsComponent implements OnInit {

  aid:number;
  p:number=1;

  associateSkills:AssociateAndSkills[];
  //  =new AssociateAndSkills(0,"","","","","","",new Associate(0,"", "", "", "", null, "", "", "", ""),new Skills(0,"",""));
  constructor(private skillService:SkillsService,
    private AssocitesSkills:AssociateSkillServiceService,
    private Uservice:UserDetailsService,
    private router:Router) { }
 
  ngOnInit() {
    this.getdata();
  }


  getdata(){
    let aaid=sessionStorage.getItem("id");
    this.aid= +aaid;
   this.AssocitesSkills.getALLAssociateSkillsById(this.aid).subscribe(response=>{
      this.associateSkills= response;
   },error=>{

   })

  }
  onupdate(model:AssociateAndSkills){
    this.AssocitesSkills.setAssociateSkillModel(model);
    this.router.navigate(["/updateAssociateSkils"])

  }
  onRemove(sid:number){
    console.log("this.is to be deleted")
    console.log(sid)
    this.skillService.onRemoveAssociateSkill(sid).subscribe(response=>{
      this.getdata();
      // this.router.navigate(["/viewSkills"])
      console.log("deleted")
    })

  }
  // getAssociateSkillbyId(){
  //    this.AssocitesSkills.getAssociateSkillsByid(this.associateSkills.SkillsInfo.SkillsInfo);
  // }
}
