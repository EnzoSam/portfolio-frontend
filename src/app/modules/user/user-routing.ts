import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { routesPaths } from './constants/routes';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    {
        path:'', redirectTo:  routesPaths.login
    },
    {path:routesPaths.login,component:LoginComponent},
];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
