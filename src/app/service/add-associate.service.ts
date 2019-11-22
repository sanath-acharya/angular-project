import { Associate } from './../model/associate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAssociateService {

  constructor(private http:HttpClient) { }

  addAssociate(model){
    console.log(model)
    return this.http.post("/api/saveAssociate",model);
  }
}
