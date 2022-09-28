import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MilestoneDetailComponent } from './components/milestone-detail/milestone-detail.component';
import { MilestonsComponent } from './components/milestons/milestons.component';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { PlacesComponent } from './components/places/places.component';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { SkillsComponent } from './components/skills/skills.component';
import { routesParams, routesPaths } from './constants/routes';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    { path: routesPaths.root, component: PanelComponent, 
        children:[
                {path:routesPaths.personal_data,component:PersonalDataComponent},

                {path:routesPaths.place,component:PlacesComponent},
                {path:routesPaths.place_detail + '/:' + routesParams.detail_id,
                 component:PlaceDetailComponent},                
                {path:routesPaths.place_new, component:PlaceDetailComponent},      
                
                {path:routesPaths.skills,component:SkillsComponent},
                {path:routesPaths.skills_detail + '/:' + routesParams.detail_id,
                 component:SkillDetailComponent},                
                {path:routesPaths.skills_new, component:SkillDetailComponent},  
                  
                {path:routesPaths.milestons + '/:' + routesParams.type,component:MilestonsComponent},
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
