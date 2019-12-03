import { Component, OnInit } from '@angular/core';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.scss']
})
export class ResultlistComponent implements OnInit {
  private AssociateSkill:AssociateAndSkills[];
  constructor(private associateSkill:AssociateSkillServiceService) { }

  ngOnInit() {
    this.associateSkill.getAllAssociateSkills().subscribe(
      (response:AssociateAndSkills[])=>{
        console.log("this is inside ts file above response")
        console.log(response)
        this.AssociateSkill=response;

      });
  }

}
