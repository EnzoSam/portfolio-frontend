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

  @Input() person?:IPerson;
  constructor() { 
    
  }

  ngOnInit(): void {
  }


}
