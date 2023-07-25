import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescricaoUnidadeComponent } from './descricao-unidade.component';
import { CreateDescricaoUnidadeComponent } from './create-descricao-unidade/create-descricao-unidade.component';
import { ViewDescricaoUnidadeComponent } from './view-descricao-unidade/view-descricao-unidade.component';
import { ViewAllDescricaoUnidadeComponent } from './view-all-descricao-unidade/view-all-descricao-unidade.component';
import { DeleteDescricaoUnidadeComponent } from './delete-descricao-unidade/delete-descricao-unidade.component';
import { UpdateDescricaoUnidadeComponent } from './update-descricao-unidade/update-descricao-unidade.component';


const routes: Routes = [
  { path: '', component: DescricaoUnidadeComponent },
  { path: 'create-descricao-unidade', component: CreateDescricaoUnidadeComponent },
  { path: 'view-descricao-unidade/:idDescricaoUnidade', component: ViewDescricaoUnidadeComponent },//changed--------------------------------------
  { path: 'view-all-descricao-unidade', component: ViewAllDescricaoUnidadeComponent },
  { path: 'delete-descricao-unidade', component: DeleteDescricaoUnidadeComponent },
  { path: 'update-descricao-unidade', component: UpdateDescricaoUnidadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescricaoUnidadeRoutingModule { }
