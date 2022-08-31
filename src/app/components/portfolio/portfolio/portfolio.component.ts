import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  person?: IPerson ;
  constructor(private _portFolioService: PortfolioService) { 

  }

  ngOnInit(): void {

    this._portFolioService.getPortfolioPerson().subscribe(person=>
    {
      console.log(person);
      this.person = person;
    },
    error=>
    {
      console.log('errrrrrrrrrrrrrrrooor');
      console.log(error);
    });
  }

}
