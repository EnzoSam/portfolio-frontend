import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPortfolio } from 'src/app/data/interfaces/iportfolio';
import { PortfolioService } from 'src/app/services/porfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit,OnDestroy {
  
  portfolio?: IPortfolio ;
  personSubscription:Subscription;
  urlImages:string;

  constructor(private _portFolioService: PortfolioService) { 

    this.urlImages = environment.baseApiImages;
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