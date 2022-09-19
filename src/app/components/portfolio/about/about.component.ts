import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from 'src/app/data/interfaces/iperson';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() person:IPerson;
  isEditMode = false;
  constructor(private _portfolioService:PortfolioService,
    private _authService:AuthService) { 
    this.person = _portfolioService.newPerson();


  }

  ngOnInit(): void {
  }

  isAuthenticated():boolean
  {
    return this._authService.isAuthenticated();
  }

  enableEdit()
  {
    this.isEditMode = !this.isEditMode;
  }
}
