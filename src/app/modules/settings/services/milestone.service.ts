import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { BaseService } from 'src/app/services/baseService';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  newMilestone(type:string):IMilestone
  {
    return {
      id:undefined,
      place:undefined,
      name:'',
      description:'',
      fromDate:new Date(),
      toDate:new Date(),
      type:type,
      image:''
    };
  }

  getMilestones(type:string):Observable<any>
  {
    return this._http.get(this.apiUrl + "milestones/" + type);
  }

  saveMilestone(milestone: IMilestone): Observable<any>
  {
    return this._http.post(this.apiUrl + "milestone/save",milestone);
  }

  deleteMilestone(milestone: IMilestone): Observable<any>
  {
    return this._http.delete(this.apiUrl + "milestone/delete/" + milestone.id);
  }

  getMilestone(id:any):Observable<any>
  {
    return this._http.get(this.apiUrl + "milestone/" + id);
  }
}
