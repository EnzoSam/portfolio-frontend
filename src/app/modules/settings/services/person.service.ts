import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { BaseService } from 'src/app/services/baseService';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  public newPerson():IPerson
  {
    return {
      id:undefined,
      name:'',
      lastName:'',
      about:'',
      address:'',
      profileImage:'',
      profession:'',
      milestones:[],
      skills:[]
    }
  }

  getPerson():Observable<IPerson>
  {
    return this._http.get<IPerson>(this.apiUrl + "person");
  }

  save(person: IPerson): Observable<IPerson>
  {
    return this._http.post<IPerson>(this.apiUrl + "person/save",person);
  }

  delete(person: IPerson): Observable<any>
  {
    return this._http.delete(this.apiUrl + "person/delete/" + person.id);
  }



}