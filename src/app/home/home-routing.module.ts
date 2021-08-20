import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes =[
  {
    path:'home', component: HomePage,
    children:[
      // {
      //   path:'cu', loadChildren:()=> import('../customerportal/customerportal.module').then(m => m.CustomerportalModule ),
      // },
      {
        path:"ad", loadChildren:()=> import('./../admin/admin.module').then(m => m.AdminPageModule ),
      }     
    ]
  },
  {
    path:'', redirectTo:'home', pathMatch:'full'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
