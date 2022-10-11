import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJWT } from 'src/app/data/interfaces/ijwt';
import { IUserLogin } from 'src/app/data/interfaces/iuserLogin';
import { BaseService } from 'src/app/services/baseService';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  newLogn():IUserLogin
  {
    return {
      userName:'', 
      password:''
    }
  }

  public login(login: IUserLogin): Observable<IJWT> {
    return this._http.post<IJWT>(this.apiUrl + 'auth/login', login);
  }  
}
