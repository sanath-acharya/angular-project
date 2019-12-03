
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
  skills:Skills[];
  skillModel:Skills=new Skills(0,"","");
  constructor( private fb:FormBuilder,private skillService: SkillsService) { }
  
 


  ngOnInit() {
   
    this.getdata();
         
  }

  onRemoveSkills(id:number){
    this.skillService.removebyid(id).subscribe(response=>{
     
    },(error)=>{
      console.log(error)
    });
  }
  onaddSkill(){
    this.skillService.addSkill(this.skillModel).subscribe((responce)=>{
      this.skills.push(this.skillModel);
    },(error)=>{
      console.log(error)

    }
    );
  }
  
    getdata(){
      this.skillService.getSkills().subscribe(responce=>{
        this.skills=responce;
    });

    }

   }
 










//   ngOnInit() {
    
//     this.addSkills=this.fb.group({
//       skills: this.fb.array([])

//     });
//   }
//   onaddSkill(){
    
//     this.isdisabled=true;
//     var formgroup=this.fb.group({
//       SkillCategory:null,
//       SkillName:null
//     });

//     (<FormArray>this.addSkills.get("skills")).push(formgroup);
//     console.log(this.addSkills);
//   }

//   onRemoveSkills(index:number){
//     (<FormArray>this.addSkills.get("skills")).removeAt(index);

//   }
//   submit(){
    
//   }
// }
