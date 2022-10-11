import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { PortfolioService } from 'src/app/services/porfolio.service';
import { environment } from 'src/environments/environment';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  person?: IPerson;
  urlUploads:string;
  urlImages:string;

  constructor(private _personService:PersonService) { 
    this.urlUploads = environment.baseApiUrl + 'upload';
    this.urlImages = environment.baseApiImages;
  }

  ngOnInit(): void {
    this._personService.getPerson().subscribe(data=>
      {
        this.person = data;
      },
      error=>
      {
        console.log(error);
      })
  }

  onSubmit()
  {
    if(!this.person)
      return;

    this._personService.save(this.person).subscribe(response=>
      {
          alert("Guardado correctamente");
      },
      error=>{
        console.log(error);
      })
  }

  fileUploaded(event:string)
  {
    console.log('archivo subido ' + event);
    console.log(event);
    if(this.person)
      this.person.profileImage = event;
    
  }
}
