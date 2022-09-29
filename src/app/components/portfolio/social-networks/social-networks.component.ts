import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPortfolio } from 'src/app/data/interfaces/iportfolio';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit,OnDestroy {
  
  portfolio?: IPortfolio ;
  personSubscription:Subscription;
  constructor(private _portFolioService: PortfolioService) { 

    this.personSubscription = _portFolioService.onPortfolioChanged
    ().subscribe(value=>this.portfolio = value);
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