import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaComponent } from './marca.component';
import { CreateMarcaComponent } from './create-marca/create-marca.component';
import { ViewMarcaComponent } from './view-marca/view-marca.component';
import { ViewAllMarcasComponent } from './view-all-marcas/view-all-marcas.component';


@NgModule({
  declarations: [
    MarcaComponent,
    CreateMarcaComponent,
    ViewMarcaComponent,
    ViewAllMarcasComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule
  ]
})
export class MarcaModule { }
