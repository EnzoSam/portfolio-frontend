import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/data/interfaces/icontact';
import { environment } from 'src/environments/environment';
import { routesParams, routesPaths } from '../../constants/routes';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  
  contact?: IContact;
  paths = routesPaths;
  urlUploads:string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _contactService: ContactService) { 
      this.urlUploads = environment.baseApiUrl + 'upload';
    }

  ngOnInit(): void {
    this._route.params.subscribe(parms => {
      
      if (parms[routesParams.detail_id]) {
        this.loadContact(+parms[routesParams.detail_id]);
      }
      else {

          this.contact = this._contactService.newContact();

    }});
  }

  onSubmit() {

    if(!this.contact)
      return;
    this._contactService.save(this.contact).subscribe(data=>
    {
      this._router.navigate(['../settings/'+ this.paths.contacts]);
    },
    error=>
    {
      console.log(error);
    });
  }

  loadContact(id: number) {

    this._contactService.getContact(id).subscribe(data=>
      {
        this.contact = data;
      },
      error=>{
        console.log(error);
      })
  }


  fileUploaded(event:string)
  {
    if(this.contact)
      this.contact.image = event;
    
  }  
}
