import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../data/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public identity:any;
  public token:string;
  apiUrl:string;

  constructor(public _http: HttpClient)
  {
    this.apiUrl = environment.baseApiUrl;
      this.token = this.getToken();
  }

  isAuthenticated():boolean
  {
      return this.getToken() != '';
  }
  
  getToken():string
  {
      let token = localStorage.getItem('token');
      if(token && token != 'undefined')
      {
          this.token = token;        
      }
      else{
              this.token = '';
      }

      return this.token;
  }    

  rememberToken(_token:string)
  {
    localStorage.setItem('token',_token);    
  }

  logout()
  {
    localStorage.removeItem('token');    
  }

  login(user:IUser):Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.apiUrl + "login",user,{headers:headers});
  }

  newUser():IUser
  {
    return {
      id:undefined,
      name:'', 
      password:''
    }
  }
}
