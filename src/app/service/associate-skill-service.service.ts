import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateAndSkills } from '../model/associate-and-skills';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssociateSkillServiceService {

  constructor(private http:HttpClient){
      
  }
  getAllAssociateSkills(){
     return this.http.get<AssociateAndSkills[]>("/api/associateSkills/all").pipe(
       map(
         (data)=>{
           return data;
         }
       )
     )
  }

}
