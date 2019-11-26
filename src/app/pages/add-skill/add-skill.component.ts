import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  addSkills:FormGroup;
  isdisabled:boolean;
  constructor( private fb:FormBuilder) { }
  
 
  ngOnInit() {
    
    this.addSkills=this.fb.group({
      skills: this.fb.array([])

    });
  }
  onaddSkill(){
    
    this.isdisabled=true;
    var formgroup=this.fb.group({
      SkillCategory:null,
      SkillName:null
    });

    (<FormArray>this.addSkills.get("skills")).push(formgroup);
    console.log(this.addSkills);
  }

  onRemoveSkills(index:number){
    (<FormArray>this.addSkills.get("skills")).removeAt(index);

  }
  submit(){
    
  }
}
