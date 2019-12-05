import { Skills } from './../model/skills';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>("/api/skills/all",{responseType:"json"});
      }
  addSkill(model){
   return  this.http.post("/api/saveSkills",model);
  }
  removebyid(id:number):Observable<any>{
    return this.http.delete<any>("api/deleteSkill/"+id);

  }
  //###################################3
  onRemoveAssociateSkill(sid:number){
    return this.http.delete("/api/deleteByASid/"+sid);
  }
  
}
