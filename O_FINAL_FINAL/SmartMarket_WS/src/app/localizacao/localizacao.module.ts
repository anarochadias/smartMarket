import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacaoRoutingModule } from './localizacao-routing.module';
import { LocalizacaoComponent } from './localizacao.component';
import { CreateLocalizacaoComponent } from './create-localizacao/create-localizacao.component';
import { ViewLocalizacaoComponent } from './view-localizacao/view-localizacao.component';
import { ViewAllLocalizacoesComponent } from './view-all-localizacoes/view-all-localizacoes.component';
import { FormsModule } from '@angular/forms';
import { DeleteLocalizacaoComponent } from './delete-localizacao/delete-localizacao.component';
import { UpdateLocalizacaoComponent } from './update-localizacao/update-localizacao.component';


@NgModule({
  declarations: [
    LocalizacaoComponent,
    CreateLocalizacaoComponent,
    ViewLocalizacaoComponent,
    ViewAllLocalizacoesComponent,
    DeleteLocalizacaoComponent,
    UpdateLocalizacaoComponent
  ],
  imports: [
    CommonModule,
    LocalizacaoRoutingModule,
    FormsModule
  ]
})
export class LocalizacaoModule { }
