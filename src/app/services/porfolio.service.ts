import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPerson } from '../data/interfaces/iperson';
import {environment} from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPortfolio } from '../data/interfaces/iportfolio';
import { IStatus } from '../data/interfaces/istatus';
import { IContact } from '../data/interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl:string;
  headers;
  private portfolioPerson: any = new BehaviorSubject<any>(undefined);
  private siteStatus: any = new BehaviorSubject<any>(undefined);

  constructor(private _http: HttpClient) { 
    this.apiUrl = environment.baseApiUrl;
    this.headers = new HttpHeaders().set('Content-Type','application/json');    
  }

  public getPortfolio():Observable<IPortfolio>
  {
    return this._http.get<IPortfolio>(this.apiUrl + "auth/portfolio",{headers:this.headers});
  }

  public  loadPortfolio()
  {
     this.getPortfolio().subscribe(portfolio=>
      {
        this.portfolioPerson.next(portfolio);
      },
      error =>
      {
        this.siteStatus.next({ok:false,data:error});
        console.log(error);
      })
  }

  onPortfolioChanged(): Observable<IPortfolio>
  {
    return this.portfolioPerson.asObservable();
  }

  onSiteStatusChanged(): Observable<IStatus>
  {
    return this.siteStatus.asObservable();
  }

  setNewState(state:IStatus):void
  {
    this.siteStatus.next(state);
  }

}
