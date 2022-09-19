import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpladFileService {

  constructor(private _http: HttpClient) {
  }

 upload(file: File, url:string): Observable<HttpEvent<any>> {
   
   const formData: FormData = new FormData();

   console.log('URL = ' + url);
   console.log(file);
   formData.append('name', 'file01.jpg');
   formData.append('file', file,'form-data');
   //let headers = new HttpHeaders().set('Authorization', this.token);

   const req = new HttpRequest('POST', url, formData, {
     reportProgress: true,
     responseType: 'json'//,
     //headers:headers
   });

   return this._http.request(req);
 }

//Archivo image.service.ts
addPicture(name:string,file:File,url:string):Observable<Object>{
 const form= new FormData();//Crea un formulario
 form.append('name',name);
 form.append('file',file,'form-data');//Asigna el campo File
 return this._http.post<Object>(url,form).
 pipe(
    // catchError(this.handleError)
 );
}  
}
