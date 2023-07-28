import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescricaoUnidadeRoutingModule } from './descricao-unidade-routing.module';
import { DescricaoUnidadeComponent } from './descricao-unidade.component';
import { CreateDescricaoUnidadeComponent } from './create-descricao-unidade/create-descricao-unidade.component';
import { ViewDescricaoUnidadeComponent } from './view-descricao-unidade/view-descricao-unidade.component';
import { ViewAllDescricaoUnidadeComponent } from './view-all-descricao-unidade/view-all-descricao-unidade.component';
import { DeleteDescricaoUnidadeComponent } from './delete-descricao-unidade/delete-descricao-unidade.component';
import { UpdateDescricaoUnidadeComponent } from './update-descricao-unidade/update-descricao-unidade.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DescricaoUnidadeComponent,
    CreateDescricaoUnidadeComponent,
    ViewDescricaoUnidadeComponent,
    ViewAllDescricaoUnidadeComponent,
    DeleteDescricaoUnidadeComponent,
    UpdateDescricaoUnidadeComponent
  ],
  imports: [
    CommonModule,
    DescricaoUnidadeRoutingModule,
    FormsModule
  ]
})
export class DescricaoUnidadeModule { }
