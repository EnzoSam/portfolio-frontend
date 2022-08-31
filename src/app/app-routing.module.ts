import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPaths } from './data/constants/routes';
import { DefaultErrorComponent } from './components/shared/default-error/default-error.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { LoginComponent } from './components/auth/login/login.component';


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
  {
    path:routesPaths.login,
    component:LoginComponent
  },  
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
