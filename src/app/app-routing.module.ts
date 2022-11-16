import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardAuthGuard } from './_guards/guard-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: AppLayoutComponent,
      children: [
        { path: '', loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[GuardAuthGuard] },
        { path: 'perfil', loadChildren: () => import('./home/perfil/perfil.module').then( m => m.PerfilModule),  canActivate:[GuardAuthGuard]  }
      ]
  },
  //{ path: 'notfound', component: NotFoundComponent },
  //{ path: '**', redirectTo: '/notfound' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
