import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/data/interfaces/icontact';
import { routesParams, routesPaths } from '../../constants/routes';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  paths = routesPaths;
  params = routesParams;
  contacts:IContact[];

  constructor(private _route:ActivatedRoute,
    private _contactService:ContactService) {
    this.contacts = [];
   }

  ngOnInit(): void {  
    this.loadContacts();
  }

  loadContacts()
  {
    this._contactService.getContacts().subscribe(data=>
      {
        this.contacts = data;
      },
      error=>
      {
        console.log(error);
      });
  }

  delete(_contact:any){

    this._contactService.delete(_contact).subscribe(data=>{
      this.loadContacts();
    },
    error=>
    {
      console.log(error);
    });
  }

}
