import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPerson } from '../data/interfaces/iperson';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl:string;
  constructor(private _http: HttpClient) { 
    this.apiUrl = environment.baseApiUrl;
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

  public getPortfolioPerson(): IPerson|undefined
  {
    return undefined;
  }

}
