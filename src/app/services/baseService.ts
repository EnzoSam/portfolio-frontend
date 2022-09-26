import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class BaseService {

    apiUrl:string;
    headers;

    constructor(protected _http: HttpClient) { 
      this.apiUrl = environment.baseApiUrl;
      this.headers = new HttpHeaders().set('Content-Type','application/json');    
    }
  
}