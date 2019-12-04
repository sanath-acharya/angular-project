import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateAndSkills } from '../model/associate-and-skills';
import { map } from 'rxjs/operators';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class AssociateSkillServiceService {
  assoSkillModel:AssociateAndSkills=new AssociateAndSkills("","","","","","",null,null);
  constructor(private http:HttpClient){
      
  }
  getAllAssociateSkills(){
     return this.http.get<AssociateAndSkills[]>("/api/associateSkills/all");
    
  }

 //####################################3
 getAssociateSkillsById(id:number){
  return this.http.get<AssociateAndSkills[]>("/api/associateSkills/"+id);
 
}
onRemoveAssociateSkill(sid:number){
  return this.http.delete("/api/deleteBySid/"+sid)

}

getALLAssociateSkillsById(aid:number){
return this.http.get<AssociateAndSkills[]>("/api/AssociateSkill/"+aid);
}
//#####################INSIDE SKILL UPDATE COMPONENT
 addToAssociateSkill(associateId:number,skillId:number,model:AssociateAndSkills){
   console.log(associateId)
   console.log(skillId)
   console.log(model)
console.log("saved to store for update skill")
  return this.http.post("/api/saveAssociateSkill/"+associateId+"/"+skillId,model);


}
getAssociteSkillmodel(){
  return this.assoSkillModel
}
setAssociateSkillModel(model:AssociateAndSkills){
  this.assoSkillModel=model;
}

//###############################
updateAssociateSkillByASid(aid:number,sid:number,model:AssociateAndSkills){
  return this.http.put("/api/"+aid+"/"+sid,model);

}

//##########################################search on result list

  search(search:string){
    return this.http.get<AssociateAndSkills[]>("/api/search/"+search);
  }
//##############################from the skill update component
  getSkill(){
    return this.http.get<Skills[]>("/api/skills/all")
  }
  getSkillname(skillcategory){
    return this.http.get<any>("/api/searchskill/"+skillcategory)
  }

}
