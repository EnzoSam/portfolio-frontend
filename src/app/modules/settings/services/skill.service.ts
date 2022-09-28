import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/data/interfaces/iskills';
import { BaseService } from 'src/app/services/baseService';

@Injectable({
  providedIn: 'root'
})

export class SkillsService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  newSkill():ISkill
  {
    return {
      id:undefined,
      name:'',
      level:0,
      image:''
    };
  }

  getSkills():Observable<any>
  {
    return this._http.get(this.apiUrl + "skills");
  }

  save(skill: ISkill): Observable<any>
  {
    return this._http.post(this.apiUrl + "skill/save",skill);
  }

  delete(skill: ISkill): Observable<any>
  {
    return this._http.delete(this.apiUrl + "skill/delete/" + skill.id);
  }

  getSkill(id:any):Observable<any>
  {
    return this._http.get(this.apiUrl + "skill/" + id);
  }
}
