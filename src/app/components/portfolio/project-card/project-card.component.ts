import { Component, Input, OnInit } from '@angular/core';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project?:IMilestone;
  urlImages:string;
  
  constructor() { 

    this.urlImages = environment.baseApiImages;
  }

  ngOnInit(): void {
  }

}
