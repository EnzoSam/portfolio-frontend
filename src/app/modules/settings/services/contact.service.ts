import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/data/interfaces/icontact';
import { BaseService } from 'src/app/services/baseService';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }

  newContact():IContact
  {
    return {
      id:undefined,
      name:'',
      contact:'',
      image:'',
      type:''
    };
  }

  getContacts():Observable<any>
  {
    return this._http.get(this.apiUrl + "contacts");
  }

  save(contact: IContact): Observable<any>
  {
    return this._http.post(this.apiUrl + "contact/save",contact);
  }

  delete(contact: IContact): Observable<any>
  {
    return this._http.delete(this.apiUrl + "contact/delete/" + contact.id);
  }

  getContact(id:any):Observable<any>
  {
    return this._http.get(this.apiUrl + "contact/" + id);
  }
}
