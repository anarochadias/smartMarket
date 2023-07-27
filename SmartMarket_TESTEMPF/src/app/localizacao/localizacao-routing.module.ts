import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacaoComponent } from './localizacao.component';
import { CreateLocalizacaoComponent } from './create-localizacao/create-localizacao.component';
import { ViewLocalizacaoComponent } from './view-localizacao/view-localizacao.component';
import { ViewAllLocalizacoesComponent } from './view-all-localizacoes/view-all-localizacoes.component';
import { DeleteLocalizacaoComponent } from './delete-localizacao/delete-localizacao.component';
import { UpdateLocalizacaoComponent } from './update-localizacao/update-localizacao.component';

const routes: Routes = [{ path: '', component: LocalizacaoComponent },
{ path: 'create-localizacao', component: CreateLocalizacaoComponent },
{ path: 'view-localizacao/:idConcelho', component: ViewLocalizacaoComponent },
{ path: 'view-all-localizacoes', component: ViewAllLocalizacoesComponent },
{ path: 'delete-localizacao', component: DeleteLocalizacaoComponent },
{ path: 'update-localizacao', component: UpdateLocalizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacaoRoutingModule { }