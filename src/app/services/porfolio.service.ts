import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPerson } from '../data/interfaces/iperson';
import {environment} from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl:string;
  headers;
  private portfolioPerson: any = new BehaviorSubject<any>(undefined);

  constructor(private _http: HttpClient) { 
    this.apiUrl = environment.baseApiUrl;
    this.headers = new HttpHeaders().set('Content-Type','application/json');    
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
      milestones:[],
      skills:[]
    }
  }

  public getPortfolioPerson():Observable<IPerson>
  {
    return this._http.get<IPerson>(this.apiUrl + "portfolio",{headers:this.headers});
  }

  public  loadPerson()
  {
     this.getPortfolioPerson().subscribe(person=>
      {
        console.log(person);
        this.portfolioPerson.next(person);
      },
      error =>
      {
        console.log(error);
      })
  }

  onPersonChange(): Observable<IPerson>
  {
    return this.portfolioPerson.asObservable()
  }

  savePerson(person: IPerson):Observable<any>
  {
    return this._http.post(this.apiUrl +"person/save",person,{headers:this.headers});
  }
}
