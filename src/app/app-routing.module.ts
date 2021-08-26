import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'space-jam',
    loadChildren: () => import('./filmes/space-jam/space-jam.module').then(m => m.SpaceJamPageModule)
  },

  {
    path: 'luca',
    loadChildren: () => import('./filmes/luca/luca.module').then(m => m.LucaPageModule)
  },

  {
    path: 'esquadrao',
    loadChildren: () => import('./filmes/esquadrao/esquadrao.module').then(m => m.EsquadraoPageModule)
  },

  {
    path: 'invocacao',
    loadChildren: () => import('./filmes/invocacao/invocacao.module').then(m => m.InvocacaoPageModule)
  },

  {
    path: 'cruela',
    loadChildren: () => import('./filmes/cruela/cruela.module').then(m => m.CruelaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
