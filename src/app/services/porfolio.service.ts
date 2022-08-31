import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPerson } from '../data/interfaces/iperson';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl:string;
  headers;

  constructor(private _http: HttpClient) { 
    this.apiUrl = environment.baseApiUrl;
    this.headers = new HttpHeaders().set('Content-Type','application/json');    
  }

  public newPerson():IPerson
  {
    return {
      id:undefined,
      name:'',
      lastname:'',
      about:'',
      address:'',
      profileImage:'',
      experiencies:[],
      educations:[],
      skills:[]
    }
  }

  public  getPortfolioPerson(): Observable<IPerson>
  {
    return  this._http.get<IPerson>(this.apiUrl + "portfolio",{headers:this.headers});    
  }

}
