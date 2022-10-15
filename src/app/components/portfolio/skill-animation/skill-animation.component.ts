import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPortfolio } from 'src/app/data/interfaces/iportfolio';
import { ISkill } from 'src/app/data/interfaces/iskills';
import { PortfolioService } from 'src/app/services/porfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-animation',
  templateUrl: './skill-animation.component.html',
  styleUrls: ['./skill-animation.component.css']
})
export class SkillAnimationComponent implements OnInit,OnDestroy {
  
  portfolio?: IPortfolio ;
  personSubscription:Subscription;
  urlImages:string;
  principalSkills:ISkill[]=[];

  constructor(private _portFolioService: PortfolioService) { 

    this.urlImages = environment.baseApiImages;
    this.personSubscription = _portFolioService.onPortfolioChanged
    ().subscribe
    ((value)=>
            {
              this.portfolio = value;
              let c = 0;
              for(let s of this.portfolio.skills)
              {
                c++;
                this.principalSkills.push(s);
                if(c === 6)
                  break;
              }
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

  scrollTo(className: string):void {
    
    const elementList = document.getElementById(className);
    elementList?.scrollIntoView({ behavior: 'smooth' });
 }

}