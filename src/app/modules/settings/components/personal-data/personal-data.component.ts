import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { PortfolioService } from 'src/app/services/porfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  person?: IPerson;
  urlUploads:string;

  constructor(private _portfolioService:PortfolioService) { 
    this.urlUploads = environment.baseApiUrl + 'upload';
  }

  ngOnInit(): void {
    this._portfolioService.getPortfolioPerson().subscribe(person=>
      {
        this.person = person;
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

    this._portfolioService.savePerson(this.person).subscribe(response=>
      {
          console.log(response);
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
