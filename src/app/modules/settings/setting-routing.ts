import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EducationComponent } from 'src/app/components/portfolio/education/education.component';
import { MilestoneDetailComponent } from './components/milestone-detail/milestone-detail.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { PlacesComponent } from './components/places/places.component';
import { routesParams, routesPaths } from './constants/routes';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    { path: routesPaths.root, component: PanelComponent, 
        children:[
                {path:routesPaths.personal_data,component:PersonalDataComponent},
                {path:routesPaths.place,component:PlacesComponent},
                {path:routesPaths.milestons + '/:' + routesParams.type,component:EducationsComponent},
                {path:routesPaths.mileston_detail + '/:' + routesParams.detail_id,
                 component:MilestoneDetailComponent},                
                {path:routesPaths.milestone_new + "/:" + routesParams.type, 
                component:MilestoneDetailComponent},
            ]
    },
];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
