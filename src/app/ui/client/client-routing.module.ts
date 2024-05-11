import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
