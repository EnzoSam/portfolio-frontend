import { Component, Input, OnInit } from '@angular/core';
import { IMilestone } from 'src/app/data/interfaces/imilestone';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project?:IMilestone;
  
  constructor() { }

  ngOnInit(): void {
  }

}
