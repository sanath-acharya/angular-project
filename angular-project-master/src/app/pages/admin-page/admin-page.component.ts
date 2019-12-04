import { AssociateSkillServiceService } from './../../service/associate-skill-service.service';
import { Skills } from './../../model/skills';
import { SkillsService } from './../../service/skills.service';

import { AddAssociateService } from 'src/app/service/add-associate.service';
import { FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/model/associate';

import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  associate:any;
  searchby="asociatename";
  searchText="";
  type=""
  private searchresult:Associate[] ;

  // =new Associate("","","","",0,"","","","");
  private AssociateModel: Associate[] ;
  private skillsList:Skills[];
  private AssociateSkill:AssociateAndSkills[];
 
  // = new Associate("", "", "", "",null, "", "", "", "");

  constructor(private AssociateService:AddAssociateService,
    private router:Router,private skillService:SkillsService ,
    private associateSkill:AssociateSkillServiceService) { 
    
    
    
    // [

    //   { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
    //   { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"},
    //   { "associateFirstName":"ben","associateLastName":"skdsjf","associateEmail":"jejl@gmal.com","password":"pass","associateMobile":341341234,"dob":"22/22/2345","gender":"male","location":"22/22/2345","country":"male"}
    // //     { "
        
    //     // associateFirstName:'ben',
    //     // associateLastName:'skdsjf',
    //     // associateEmail:'jejl@gmal.com',
    //     // password:'pass',
    //     // associateMobile:341341234,
    //     // dob:'22/22/2345',
    //     // gender:'male',
    //     // location:'22/22/2345',
    //     // country:'male'
    //  ];


     
  }
// addSkills:FormGroup;
  ngOnInit() {
    
    this.getdata();
    this.type=sessionStorage.getItem('type');
  }

  onSearchClick(){
    this.associateSkill.search(this.searchText).subscribe(
      (response)=>{
        console.log(response);
        console.log("this is inside onsearch funtion");
        this.AssociateSkill=response;

        console.log(Array.of(response));
        this.router.navigateByUrl['/admin']

        // console.log(this.searchresult)
        
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


    
      
      
      this.associateSkill.getAllAssociateSkills().subscribe(
        (response:AssociateAndSkills[])=>{
          console.log("this is inside ts file above response")
          console.log(response)
          this.AssociateSkill=response;
  
        });
    
    }

    logout(){
      sessionStorage.removeItem('type')
      sessionStorage.removeItem('currentUser')
      sessionStorage.removeItem('id')
      this.router.navigate(['login'])
    }
    
  

}
