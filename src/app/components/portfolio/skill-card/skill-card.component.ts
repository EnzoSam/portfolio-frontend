import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/data/interfaces/iskills';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() skill?:ISkill;
  urlImages:string;

  constructor() { 

    this.urlImages = environment.baseApiImages;
  }

  ngOnInit(): void {
    document.getElementsByClassName('progress')[0].setAttribute('aria-valuenow',this.skill?.level + '');
  }

}
