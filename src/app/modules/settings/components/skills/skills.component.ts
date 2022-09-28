import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISkill } from 'src/app/data/interfaces/iskills';
import { routesParams, routesPaths } from '../../constants/routes';
import { SkillsService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  paths = routesPaths;
  params = routesParams;
  skills:ISkill[];

  constructor(private _route:ActivatedRoute,
    private _skillService:SkillsService) {
    this.skills = [];
   }

  ngOnInit(): void {  
    this.loadSkills();
  }

  loadSkills()
  {
    this._skillService.getSkills().subscribe(data=>
      {
        this.skills = data;
      },
      error=>
      {
        console.log(error);
      });
  }

  delete(_skill:any){

    this._skillService.delete(_skill).subscribe(data=>{
      this.loadSkills();
    },
    error=>
    {
      console.log(error);
    });
  }

}
