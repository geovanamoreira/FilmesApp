import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CruelaPage } from './cruela.page';

const routes: Routes = [
  {
    path: '',
    component: CruelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CruelaPageRoutingModule {}
