import { FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  associate:any;
  constructor() { 
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
addSkills:FormGroup;
  ngOnInit() {
    
    this.addSkills=new FormGroup({
      skills:new FormArray([])

    });
  }
  onaddSkill(){
    var formgroup=new FormGroup({
      skillName:new FormControl(null),
      level:new FormControl(null)
    });

    (<FormArray>this.addSkills.get("skills")).push(formgroup);
    console.log(this.addSkills);
  }

  

}
