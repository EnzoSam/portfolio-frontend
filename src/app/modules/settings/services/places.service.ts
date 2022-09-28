import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlace } from '../../../data/interfaces/iplace';
import { BaseService } from '../../../services/baseService';

@Injectable({
  providedIn: 'root'
})
export class PlacesService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  newPlace():IPlace
  {
    return {
      id:undefined,
      name:'',
      description:'',
      image:'',
      web:''
    };
  }

  getPlaces():Observable<any>
  {
    return this._http.get(this.apiUrl + "places");
  }

  save(place: IPlace): Observable<any>
  {
    return this._http.post(this.apiUrl + "place/save",place);
  }

  delete(place: IPlace): Observable<any>
  {
    return this._http.delete(this.apiUrl + "place/delete/" + place.id);
  }

  getPlace(id:any):Observable<any>
  {
    return this._http.get(this.apiUrl + "place/" + id);
  }
}
