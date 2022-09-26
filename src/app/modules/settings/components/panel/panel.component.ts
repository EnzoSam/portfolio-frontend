import { Component, OnInit } from '@angular/core';
import { milestones_type } from 'src/app/data/constants/portfolio';
import { routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  paths:any;
  milestoneTypes = milestones_type;
  constructor() { 
    this.paths = routesPaths;
  }

  ngOnInit(): void {
  }

}
