import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { milestones_type } from 'src/app/data/constants/portfolio';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { MilestoneService } from 'src/app/services/milestone.service';
import { routesParams, routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {

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
        console.log(data);
        this.milestones = data;
      },
      error=>
      {
        console.log(error);
      });
  }

  delete(_milestone:any){

    this._milestoneService.deleteMilestone(_milestone).subscribe(data=>{
      console.log(data);

      this.loadMilestons();
    },
    error=>
    {
      console.log(error);
    });
  }

}
