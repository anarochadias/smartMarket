import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'marca', loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule) }, { path: 'localizacao', loadChildren: () => import('./localizacao/localizacao.module').then(m => m.LocalizacaoModule) }, { path: 'descricaoUnidade', loadChildren: () => import('./descricao-unidade/descricao-unidade.module').then(m => m.DescricaoUnidadeModule) }, { path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
