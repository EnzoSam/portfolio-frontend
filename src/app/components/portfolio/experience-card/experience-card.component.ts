import { Component, Input, OnInit } from '@angular/core';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience?:IMilestone;
  urlImages:string;

  constructor() { 

    this.urlImages=environment.baseApiImages;
  }

  ngOnInit(): void {
  }

}
