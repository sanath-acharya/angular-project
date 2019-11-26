
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associate } from '../model/associate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAssociateService {

  constructor(private http:HttpClient) { }

  addAssociate(model){
    console.log(model)
    return this.http.post("/api/saveAssociate",model);
  }
  getAssociate():Observable<Associate[]>{
    return this.http.get<Associate[]>("/api/");
  }
}
