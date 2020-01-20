import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarNotasPage } from './agregar-notas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarNotasPageRoutingModule {}
