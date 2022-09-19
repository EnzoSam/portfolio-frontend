import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { routesPaths } from './constants/routes';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    { path: routesPaths.root, component: PanelComponent, 
        children:[
                {path:routesPaths.personal_data,component:PersonalDataComponent},
            ]
    },
];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
