import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { routesPaths } from './data/constants/routes';
import { IPortfolio } from './data/interfaces/iportfolio';
import { IStatus } from './data/interfaces/istatus';
import { PortfolioService } from './services/porfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'porfolio-frontend';
  portfolio?: IPortfolio ;
  status?:IStatus;
  personSubscription:Subscription;
  statusSubscription:Subscription;
  
  constructor(private _portFolioService: PortfolioService,
    private _router:Router) { 

    _portFolioService.loadPortfolio();
    this.personSubscription = _portFolioService.onPortfolioChanged().subscribe(value=>this.portfolio = value);
    this.statusSubscription = _portFolioService.onSiteStatusChanged().subscribe
    (
      (value)=> {
        this.status = value;
        if(value && value.data && value.data.status && value.data.status === 401)
        {
            this._router.navigate([routesPaths.auth]);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if(this.personSubscription)
    {
      this.personSubscription.unsubscribe();
    }
  }  
}
