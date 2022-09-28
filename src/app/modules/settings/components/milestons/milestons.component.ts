import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { milestones_type } from 'src/app/data/constants/portfolio';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { routesParams, routesPaths } from '../../constants/routes';
import { MilestoneService } from '../../services/milestone.service';

@Component({
  selector: 'app-milestons',
  templateUrl: './milestons.component.html',
  styleUrls: ['./milestons.component.css']
})
export class MilestonsComponent implements OnInit {

  paths = routesPaths;
  params = routesParams;
  types = milestones_type;
  type?:string;

  milestones:IMilestone[];

  constructor(private _route:ActivatedRoute,
    private _milestoneService:MilestoneService) {
    this.milestones = [];
   }

  ngOnInit(): void {

    this._route.params.subscribe(_params=>
      {
        this.type = _params[this.params.type];
        this.loadMilestons();
      })
    

  }

  loadMilestons()
  {
    if(!this.type)
      return;
    this._milestoneService.getMilestones(this.type).subscribe(data=>
      {
        this.milestones = data;
      },
      error=>
      {
        console.log(error);
      });
  }

  delete(_milestone:any){

    this._milestoneService.deleteMilestone(_milestone).subscribe(data=>{
      this.loadMilestons();
    },
    error=>
    {
      console.log(error);
    });
  }

}
