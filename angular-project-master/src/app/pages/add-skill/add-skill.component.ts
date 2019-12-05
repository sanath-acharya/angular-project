import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from 'src/app/model/skills';


@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  // skillname:string;
  // skillCategory:string;
  skills: Skills[];
  skillModel: Skills = new Skills(0, "", "");
  p:number=1;
  constructor(private fb: FormBuilder, 
    private skillService: SkillsService,
    private router:Router) { }


  
  selected_Category:string;
  selected_skillname:string;
  // selected_country: string;
  // select_state: string;
  s_a = new Array(new Array("Spring", "NodeJs", "MongoDB", "Mysql", "Python"), new Array( "HTML","CSS","JavaScript", "Angular"), new Array(  "REST" , "SOAP", "Apache", "MySQL", "MongoDB", "Oracle", "Java", "Python", "Ruby"), new Array("DevOps", "Agile", "Automation"));
   skillName= new Array<String>();
   skillCategory = new Array("FSD", "FrontEnd", "BackEnd", "Testing");
 
  


  ngOnInit() {

    this.getdata();

  }

  onRemoveSkills(id: number) {
    this.skillService.removebyid(id).subscribe(response => {
      this.getdata();

    }, (error) => {
      console.log(error)
    });
  }
  onaddSkill() {
    this.skillService.addSkill(this.skillModel).subscribe((responce) => {
      this.skills.push(this.skillModel);
      this.getdata();
    }, (error) => {
      console.log(error)

    }
    );
  }

  getdata() {
    this.skillService.getSkills().subscribe(responce => {
      this.skills = responce;
    });

  }

  onCategorySelected(skill_cat: string) {
    console.log(skill_cat);
    if(skill_cat === 'FSD'){
      this.skillName = this.s_a[0];
    }else if(skill_cat === 'FrontEnd'){
      this.skillName = this.s_a[1];
    }else if(skill_cat === 'BackEnd')
    {
      this.skillName = this.s_a[2];
    }
    else{
      this.skillName = this.s_a[3];
    }
  }


  onSkillSelected(skill_name: string){
    console.log(skill_name);
  }

}