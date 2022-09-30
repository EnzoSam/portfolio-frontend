import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { milestones_type } from 'src/app/data/constants/portfolio';
import { IMilestone } from 'src/app/data/interfaces/imilestone';
import { IPlace } from 'src/app/data/interfaces/iplace';
import { PlacesService } from 'src/app/modules/settings/services/places.service';
import { environment } from 'src/environments/environment';
import { routesParams, routesPaths } from '../../constants/routes';
import { MilestoneService } from '../../services/milestone.service';

@Component({
  selector: 'app-milestone-detail',
  templateUrl: './milestone-detail.component.html',
  styleUrls: ['./milestone-detail.component.css']
})
export class MilestoneDetailComponent implements OnInit {

  milestone?: IMilestone;
  type?: string;
  paths = routesPaths;
  places:IPlace[] = [];
  urlImages:string;
  urlUploads:string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _milestoneService: MilestoneService,
    private _placeService:PlacesService) { 

      this.urlImages = environment.baseApiImages;
      this.urlUploads = environment.baseApiUrl+'upload';
    }



  ngOnInit(): void {

    this.loadPlaces();
  }

  async loadData()
  {
    console.log(this.places);
    this._route.params.subscribe(parms => {
      
      if (parms[routesParams.detail_id]) {
        this.loadMilestone(+parms[routesParams.detail_id]);
      }
      else {

        this.type = parms[routesParams.type];
        if (this.type) {
          this.milestone = this._milestoneService.newMilestone(this.type.toString());

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

      console.log(this.milestone);
    this._milestoneService.saveMilestone(this.milestone).subscribe(data=>
    {
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
        this.milestone = data;
        this.type = this.milestone?.type;

        console.log(this.milestone);
      },
      error=>{
        console.log(error);
      })
  }

  loadPlaces()
  {
    this._placeService.getPlaces().subscribe(data=>
      {
        this.places = data;

        this.loadData();
      },
      error=>
      {
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

  compareFn(a:any, b:any) {
    if(a != null && b != null)
      return a.id === b.id;
    else
        return false;
 }

 fileUploaded(event:string)
 {
   if(this.milestone)
     this.milestone.image = event;
   
 }  
}
