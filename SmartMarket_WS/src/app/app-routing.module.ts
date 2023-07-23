import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'marca', loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule) }, { path: 'localizacao', loadChildren: () => import('./localizacao/localizacao.module').then(m => m.LocalizacaoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
