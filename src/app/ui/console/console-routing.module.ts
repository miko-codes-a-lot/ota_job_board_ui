import { RouterModule, Routes } from '@angular/router';

import { ConsoleComponent } from './console.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
