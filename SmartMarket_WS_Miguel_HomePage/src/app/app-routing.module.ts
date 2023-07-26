import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', redirectTo: '/homepage', pathMatch: 'full'},{ path: 'marca', loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule) }, { path: 'localizacao', loadChildren: () => import('./localizacao/localizacao.module').then(m => m.LocalizacaoModule) }, { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
