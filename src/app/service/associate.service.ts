import { Associates } from './../associates';
import { Response } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http:HttpClient) { }
  getAllAssociates(){
    var currentUser={token:" "};
    var headers=new HttpHeaders();
    headers=headers.set("Authorization","Bearer");
    if(sessionStorage.currentUser!=null){
      currentUser=JSON.parse(sessionStorage.currentUser);
      headers=headers.set("Authorization","Bearer"+currentUser.token);

    }
    return this.http.get<Associates[]>("/api/associates/list",{headers:headers,responseType:"json"})
    .pipe(map(
      (data:Associates[])=>{
        return data;
      }
    ))
  }
}
