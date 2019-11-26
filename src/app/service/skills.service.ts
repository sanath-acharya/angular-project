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
    return this.http.get<Skills[]>("api/url");

  }
}
