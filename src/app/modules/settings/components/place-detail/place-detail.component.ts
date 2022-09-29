import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlace } from 'src/app/data/interfaces/iplace';
import { PlacesService } from 'src/app/modules/settings/services/places.service';
import { environment } from 'src/environments/environment';
import { routesParams, routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

 
  place?: IPlace;
  paths = routesPaths;
  urlUploads:string;
  urlImages:string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _placeService: PlacesService) { 
      this.urlUploads = environment.baseApiUrl + 'upload';
      this.urlImages = environment.baseApiImages;
    }

  ngOnInit(): void {
    this._route.params.subscribe(parms => {
      
      if (parms[routesParams.detail_id]) {
        this.loadPlace(+parms[routesParams.detail_id]);
      }
      else {

          this.place = this._placeService.newPlace();

    }});
  }

  onSubmit() {

    if(!this.place)
      return;
    this._placeService.save(this.place).subscribe(data=>
    {
      this._router.navigate(['../settings/'+ this.paths.place]);
    },
    error=>
    {
      console.log(error);
    });
  }

  loadPlace(id: number) {

    this._placeService.getPlace(id).subscribe(data=>
      {
        this.place = data;
      },
      error=>{
        console.log(error);
      })
  }


  fileUploaded(event:string)
  {
    if(this.place)
      this.place.image = event;
    
  }  
}
