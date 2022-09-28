import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISkill } from 'src/app/data/interfaces/iskills';
import { environment } from 'src/environments/environment';
import { routesParams, routesPaths } from '../../constants/routes';
import { SkillsService } from '../../services/skill.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {

 
  skill?: ISkill;
  paths = routesPaths;
  urlUploads:string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _skillService: SkillsService) { 
      this.urlUploads = environment.baseApiUrl + 'upload';
    }

  ngOnInit(): void {
    this._route.params.subscribe(parms => {
      
      if (parms[routesParams.detail_id]) {
        this.loadSkill(+parms[routesParams.detail_id]);
      }
      else {

          this.skill = this._skillService.newSkill();

    }});
  }

  onSubmit() {

    if(!this.skill)
      return;
    this._skillService.save(this.skill).subscribe(data=>
    {
      this._router.navigate(['../settings/'+ this.paths.skills]);
    },
    error=>
    {
      console.log(error);
    });
  }

  loadSkill(id: number) {

    this._skillService.getSkill(id).subscribe(data=>
      {
        this.skill = data;
      },
      error=>{
        console.log(error);
      })
  }


  fileUploaded(event:string)
  {
    if(this.skill)
      this.skill.image = event;
    
  }  
}
