import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit,OnDestroy {

  person?: IPerson ;
  personSubscription:Subscription;
  constructor(private _portFolioService: PortfolioService) { 

    _portFolioService.loadPerson();
    this.personSubscription = _portFolioService.onPersonChange().subscribe(value=>this.person = value);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.personSubscription)
    {
      this.personSubscription.unsubscribe();
    }
  }

}
