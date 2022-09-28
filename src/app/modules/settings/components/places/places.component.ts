import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from 'src/app/data/interfaces/iplace';
import { PlacesService } from 'src/app/modules/settings/services/places.service';
import { routesParams, routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  
  paths = routesPaths;
  params = routesParams;
  places:IPlace[];

  constructor(private _route:ActivatedRoute,
    private _placesService:PlacesService) {
    this.places = [];
   }

  ngOnInit(): void {  
    this.loadPlaces();
  }

  loadPlaces()
  {
    this._placesService.getPlaces().subscribe(data=>
      {
        this.places = data;
      },
      error=>
      {
        console.log(error);
      });
  }

  delete(_place:any){

    this._placesService.delete(_place).subscribe(data=>{
      this.loadPlaces();
    },
    error=>
    {
      console.log(error);
    });
  }

}
