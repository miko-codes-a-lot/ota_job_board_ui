import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { ForbiddenComponent } from './ui/error/forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './ui/error/not-found/not-found.component';
import { UnauthorizedComponent } from './ui/error/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'client', loadChildren: () => import('./ui/client/client.module').then(m => m.ClientModule) },
  {
    path: 'console',
    loadChildren: () => import('./ui/console/console.module').then(m => m.ConsoleModule),
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  { path: '401', component: UnauthorizedComponent },
  { path: '403', component: ForbiddenComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
