import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/LoginComponent';
import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    pathMatch:"full"

},
{   
    path: 'login',
    component: LoginComponent,
    pathMatch:"full"

},
{ 
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch:"full"

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
