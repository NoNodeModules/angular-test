import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import ('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path:'login',
    loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path:'news',
    loadChildren: () => import ('./pages/news/news.module').then(m => m.NewsModule),
  },
  {
    path:'profile',
    loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path:'**',
    loadChildren: () => import ('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
