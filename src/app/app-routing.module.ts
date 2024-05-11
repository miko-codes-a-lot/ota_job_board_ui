import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./ui/client/client.module').then(m => m.ClientModule) },
  { path: 'console', loadChildren: () => import('./ui/console/console.module').then(m => m.ConsoleModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
