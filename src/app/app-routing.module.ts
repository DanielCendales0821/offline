import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'agregar-notas',
    loadChildren: () => import('./agregar-notas/agregar-notas.module').then( m => m.AgregarNotasPageModule)
  },
  {
    path: 'editar-notas',
    loadChildren: () => import('./editar-notas/editar-notas.module').then( m => m.EditarNotasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
