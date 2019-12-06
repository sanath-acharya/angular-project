import { Associates } from './../associates';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,TemplateRef  } from '@angular/core';
import { Associate } from '../model/associate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAssociateService {
  editModeltoupdate:Associate=new  Associate(0,"", "", "", "", null, "", "", "", "");
 
  constructor(private http:HttpClient,private route:Router) { }

  


  addAssociate(model){
    console.log(model);
    console.log("inside service");

    return this.http.post("/api/saveAssociate",model);
  }
  getAssociate():Observable<Associate[]>{
    // var currentUser={token:""};
    // var header=new HttpHeaders();
    // header=header.set("Authorization","Bearer");
    // if(sessionStorage.currentUser!=null){
    //   currentUser=JSON.parse(sessionStorage.currentUser);
    //   header=header.set("Authorization","Bearer"+currentUser.token);
    // }
    return this.http.get<Associate[]>("/api/associate/all");
  }
  getAssociatebyId(aid:number){
    return this.http.get<Associate>("/api/associate/"+aid);
  }

  searchbyfirstname(searchtext:string):Observable<Associate[]>{
    
    return this.http.get<Associate[]>("/api/name/"+searchtext);
  }
  
  searchbylastname(searchtext:string):Observable<Associate[]>{
    
    return this.http.get<Associate[]>("/api/AssociateLastName/"+searchtext);
  }
 
  
  searchbyemail(searchtext:string):Observable<Associate[]>{
    
    return this.http.get<Associate[]>("/api/AssociateEmail/"+searchtext);
  }
  searchbymobile(searchtext:string):Observable<Associate[]>{
    
    return this.http.get<Associate[]>("/api/AssociateMobile/"+searchtext);
  }
 
 

  updateAssociate(editModel:Associate){
    this.editModeltoupdate=editModel;
    

    this.route.navigate(["/editAssociate"]);

    // return this.http.put<Associate>("/api/",tochangemodel);
  }
  updateAfterEdit(model:Associate):Observable<any>{

    console.log(model)
    console.log("this is tob be edited");
    return this.http.put<any>("/api/updateAssociate",model);
   


  }
  deletebyId(associateId:number)
  {
    
    console.log("tis. is service");
    console.log(associateId);
      return this.http.delete("/api/deleteAssociate/"+associateId);
      console.log("after. is service")
  }
  getModalofEdit():Associate{
    return this.editModeltoupdate;
  }
}
