import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage, children:[
      {
        path:'orders/upcoming', component: OrdersComponent, children:[
          // {
          //   path:'upcoming', component: OrderlistComponent
          // },
          // {
          //   path:'processed', component: ProcessedorderslistComponent
          // },
          // {
          //   path:'completed', component: OrderscompletedlistComponent
          // },
          // {
          //   path:'details', component: ViewitemsComponent
          // },
          // {
          //   path:'all', component: AllorderslistComponent
          // },{
          //   path:'new', component: MannulOrdersComponent
          // },
          // {
          //   path:'', redirectTo:'upcoming', pathMatch:'full'
          // }
        ]
      },
      {
        path:"", component:DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
