import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { PanelComponent } from './components/panel/panel.component';
import { appRoutingProviders, routing } from './setting-routing';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PlacesComponent } from './components/places/places.component';
import { MilestoneDetailComponent } from './components/milestone-detail/milestone-detail.component';




@NgModule({
  declarations: [
    PanelComponent,
    PersonalDataComponent,
    UploadFileComponent,
    EducationsComponent,
    ExperienceComponent,
    PlacesComponent,
    MilestoneDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders] 
})
export class SettingsModule { }
