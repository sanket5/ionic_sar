import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';

const routes : Routes =[ 

  {
    path:'', component:AuthPage, children:[
      {
        path:'login', component: LoginComponent
      },
      // {
      //   path:'register', component: RegisterComponent
      // },
      // {
      //   path:'forgot', component: ForgotComponent
      // },
      {
        path:'', redirectTo:'login', pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
