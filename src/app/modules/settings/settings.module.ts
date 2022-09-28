import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { PanelComponent } from './components/panel/panel.component';
import { appRoutingProviders, routing } from './setting-routing';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { MilestonsComponent } from './components/milestons/milestons.component';
import { PlacesComponent } from './components/places/places.component';
import { MilestoneDetailComponent } from './components/milestone-detail/milestone-detail.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { MilestoneService } from './services/milestone.service';
import { PlacesService } from './services/places.service';
import { SkillsService } from './services/skill.service';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { SkillsComponent } from './components/skills/skills.component';




@NgModule({
  declarations: [
    PanelComponent,
    PersonalDataComponent,
    UploadFileComponent,
    MilestonsComponent,
    PlacesComponent,
    MilestoneDetailComponent,
    PlaceDetailComponent,
    SkillDetailComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: 
  [
    appRoutingProviders,
    MilestoneService,
    PlacesService,
    SkillsService
  ] 
})
export class SettingsModule { }
