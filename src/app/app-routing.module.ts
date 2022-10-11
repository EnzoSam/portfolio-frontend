import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPaths } from './data/constants/routes';
import { DefaultErrorComponent } from './components/shared/default-error/default-error.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { GuardService as guard} from './services/guard.service';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:routesPaths.portfolio
  },
  {
    path:routesPaths.portfolio,
    component:PortfolioComponent
  },
  { path: routesPaths.settings,
    canActivate: [guard], data: { expectedRol: ['admin', 'user']},
  children:[
      {
          path:'',
          loadChildren: ()=> import ('./modules/settings/settings.module').then((m)=>m.SettingsModule)
      }
  ]},   
  { path: routesPaths.auth,
    children:[
        {
            path:'',
            loadChildren: ()=> import ('./modules/user/user.module').then((m)=>m.UserModule)
        }
    ]},   
  {
    path:'**',
    component:DefaultErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
