import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { milestones_type } from 'src/app/data/constants/portfolio';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { MilestoneService } from 'src/app/services/milestone.service';
import { routesParams, routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-milestone-detail',
  templateUrl: './milestone-detail.component.html',
  styleUrls: ['./milestone-detail.component.css']
})
export class MilestoneDetailComponent implements OnInit {

  milestone?: IMilestone;
  type?: string;
  paths = routesPaths;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _milestoneService: MilestoneService) { }

  ngOnInit(): void {
    this._route.params.subscribe(parms => {
      
      if (parms[routesParams.detail_id]) {
        this.loadMilestone(+parms[routesParams.detail_id]);
      }
      else {

        this.type = parms[routesParams.type];
        if (this.type) {
          this.milestone = this._milestoneService.newMilestone(this.type.toString());

        console.log(this.milestone);
        }
        else
        {
          console.log('Type es requerido')
        }
      }

    })
  }

  onSubmit() {

    if(!this.milestone)
      return;
    this._milestoneService.saveMilestone(this.milestone).subscribe(data=>
    {
      console.log(data);
      this._router.navigate(['../settings/'+ this.paths.milestons, this.type]);
    },
    error=>
    {
      console.log(error);
    });
  }

  loadMilestone(id: number) {

    this._milestoneService.getMilestone(id).subscribe(data=>
      {
        console.log(data);
        this.milestone = data;
      },
      error=>{
        console.log(error);
      })
  }

  getTypeName() {
    if (this.type == milestones_type.EDUCATION)
      return "Educacion";
    else if (this.type == milestones_type.EXPERIENCE)
      return "Experiencia";
    else return "";
  }
}
