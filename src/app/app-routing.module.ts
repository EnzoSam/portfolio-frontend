import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPaths } from './data/constants/routes';
import { DefaultErrorComponent } from './components/shared/default-error/default-error.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full'
  },
  {path:'**',component:DefaultErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
