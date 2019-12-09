import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { AssociateAndSkills } from 'src/app/model/associate-and-skills';
import { AssociateSkillServiceService } from 'src/app/service/associate-skill-service.service';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.scss']
})


export class ResultlistComponent implements OnInit {
  p:number=1;
 
  searchTerm: string;
  searchResult = [];

  AssociateSkill:AssociateAndSkills[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private associateSkill:AssociateSkillServiceService
    
  ) { }

  ngOnInit() {

    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.searchTerm = params.get("id");
    // });
    // this.search();


    this.associateSkill.getAllAssociateSkillsfeign().subscribe(
      (response:AssociateAndSkills[])=>{
        console.log("this is inside ts file above response")
        console.log(response)
        this.AssociateSkill=response;

      });
  }


  
  search(){
    if (this.searchTerm.trim()) {

    this.associateSkill.search(this.searchTerm).subscribe(response=>{
      this.AssociateSkill=response;
      })
  }
  }


}