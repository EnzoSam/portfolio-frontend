import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/data/interfaces/icontact';
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
  whatsapp:string | undefined;

  constructor(private _portFolioService: PortfolioService) { 

    this.urlImages = environment.baseApiImages;
    this.personSubscription = _portFolioService.onPortfolioChanged
    ().subscribe(
      (value)=>{this.portfolio = value;
        this.getWhatsappContact();
      }
      );
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.personSubscription)
    {
      this.personSubscription.unsubscribe();
    }
  }

  getWhatsappContact():IContact|undefined{

    let ws:IContact | undefined;

    if(this.portfolio)
    {
      for(let c of this.portfolio.contacts)
      {
        if(c.type === "WHATSAPP")
        {
           ws = c;
           this.whatsapp = c.contact;
           break;
        }
      }
    }

    return ws;
  }
}