import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaComponent } from './marca.component';
import { CreateMarcaComponent } from './create-marca/create-marca.component';
import { ViewMarcaComponent } from './view-marca/view-marca.component';
import { ViewAllMarcasComponent } from './view-all-marcas/view-all-marcas.component';
import { FormsModule } from '@angular/forms';
import { UpdateMarcaComponent } from './update-marca/update-marca.component';
import { DeleteMarcaComponent } from './delete-marca/delete-marca.component';


@NgModule({
  declarations: [
    MarcaComponent,
    CreateMarcaComponent,
    ViewMarcaComponent,
    ViewAllMarcasComponent,
    UpdateMarcaComponent,
    DeleteMarcaComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    FormsModule
  ]
})
export class MarcaModule { }
