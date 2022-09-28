import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { IPortfolio } from 'src/app/data/interfaces/iportfolio';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit,OnDestroy {

  portfolio?: IPortfolio ;
  personSubscription:Subscription;
  constructor(private _portFolioService: PortfolioService) { 

    _portFolioService.loadPortfolio();
    this.personSubscription = _portFolioService.onPortfolioChanged().subscribe(value=>this.portfolio = value);
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
