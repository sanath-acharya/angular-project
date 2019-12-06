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
  eid;
  p:number=1;

  aaid;
  constructor(private router:ActivatedRoute,
    private associateSkill:AssociateSkillServiceService,
    private associateSerivice:AddAssociateService) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.id=params.id
     
    } );

    let eeid=sessionStorage.getItem('id');
    console.log("htis is from session storage")
    console.log(eeid)
   

    
    
    // this.userType = this.router.snapshot.queryParamMap.get("userType");
    // this.router.queryParams.id
    if(this.id==undefined){

      if(eeid==null){

      }else{
  
        this.eid= +eeid;
        this.getdata(this.eid)
        this.aaid=this.eid;
      }
      
    }else{
      let iid= +this.id;
      this.aaid=this.eid;
      this.getdata(iid)
      console.log(iid)
      
    }
    
    console.log("this is eeid from session storage")
    console.log(this.eid);
    console.log("this.is from the url")
    console.log(this.id)
    


  }
  
 getdata(aid){
  this.associateSkill.getALLAssociateSkillsById(aid).subscribe(response=>{
    this.associateSkills=response;
    console.log(this.associateSkills)
  })

  this.associateSerivice.getAssociatebyId(aid).subscribe(response=>{
    this.associate=response;
    console.log(this.associate)
  })
 }
}
