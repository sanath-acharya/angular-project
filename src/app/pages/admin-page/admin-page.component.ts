import { AssociateSkillServiceService } from './../../service/associate-skill-service.service';
import { Skills } from './../../model/skills';
import { SkillsService } from './../../service/skills.service';
import { Associates } from './../../associates';
import { AddAssociateService } from 'src/app/service/add-associate.service';
import { FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';
import { Response } from 'selenium-webdriver/http';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  associate:any;
  searchByname="asociatename";
  searchtext="asociatename";
  private AssociateModel: Associate[] ;
  private skillsList:Skills[];
  private AssociateSkill:AssociateAndSkills[];
 
  // = new Associate("", "", "", "",null, "", "", "", "");

  constructor(private AssociateService:AddAssociateService,private skillService:SkillsService ,private associateSkill:AssociateSkillServiceService) { 
    this.associate = [

      { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
      { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
      { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"}
    //     { "
        
        // associateFirstName:'ben',
        // associateLastName:'skdsjf',
        // associateEmail:'jejl@gmal.com',
        // password:'pass',
        // associateMobile:341341234,
        // dob:'22/22/2345',
        // gender:'male',
        // location:'22/22/2345',
        // country:'male'
     ];


     
  }
// addSkills:FormGroup;
  ngOnInit() {
    
    this.getdata();
    
  }

  onSearchClick(){
    this.AssociateService.searchby(this.searchByname,this.searchtext).subscribe(
      (response:Associate[])=>{
        this.AssociateModel=response
      },(error)=>{
        console.log(error);
      }
    );
  }
  // onaddSkill(){
  //   var formgroup=new FormGroup({
  //     skillName:new FormControl(null),
  //     level:new FormControl(null)
  //   });

  //   (<FormArray>this.addSkills.get("skills")).push(formgroup);
  //   console.log(this.addSkills);
  // }

  getdata(){
    this.AssociateService.getAssociate().subscribe(
      response=>{
      // console.log(response);
      // if(response!=null){
        this.AssociateModel=response;

      }
    );
    this.skillService.getSkills().subscribe(
      (response:Skills[])=>{
        this.skillsList=response;
        
      }
    );
    this.associateSkill.getAllAssociateSkills().subscribe(
      (response:AssociateAndSkills[])=>{
        this.AssociateSkill=response;

      });
  }
  

}
