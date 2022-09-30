import { Component, Input, OnInit } from '@angular/core';
import { IMilestone } from 'src/app/data/interfaces/imilestone';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {

  @Input() education?:IMilestone;
  constructor() { }

  ngOnInit(): void {
  }

}
