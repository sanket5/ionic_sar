import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from './auth/auth.module';
import { MaterialModule } from './material.modules';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'v2',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'', redirectTo:'auth', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthPageModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
