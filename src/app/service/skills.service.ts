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
  removebyname(id:number):Observable<string>{
    return this.http.delete<string>("api/id?id="+id);

  }
  
}
