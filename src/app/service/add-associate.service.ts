import { Associates } from './../associates';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associate } from '../model/associate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAssociateService {
  editModeltoupdate:Associate=new  Associate("", "", "", "", null, "", "", "", "");
  constructor(private http:HttpClient,private route:Router) { }

  addAssociate(model){
    console.log(model);
    console.log("inside service");

    return this.http.post("/api/saveAssociate",model);
  }
  getAssociate():Observable<Associate[]>{
    return this.http.get<Associate[]>("/api/associate/all");
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
 
 

  updateAssociate(index:number,editModel:Associate){
    this.editModeltoupdate=editModel;
    

    this.route.navigateByUrl("/editAssociate");

    // return this.http.put<Associate>("/api/",tochangemodel);
  }
  updateAfterEdit(model:Associate){

    console.log(model)
    console.log("this is tob be edited");
     this.http.put("/api/updateAssociate",model);
     this.route.navigateByUrl("/viewAssociate");


  }
  deletebyid(email:number)
  {
    
    console.log("tis. is service")
    console.log(email);
      this.http.delete("/api/deleteAssociate/"+email)
      console.log("after. is service")
  }
  getModalofEdit():Associate{
    return this.editModeltoupdate;
  }
}
