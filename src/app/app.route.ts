import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from 'app/services/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard],
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'login'
          }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
