import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { ViewCategoriaComponent } from './view-categoria/view-categoria.component';
import { ViewAllCategoriasComponent } from './view-all-categorias/view-all-categorias.component';
import { FormsModule } from '@angular/forms';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    CreateCategoriaComponent,
    ViewCategoriaComponent,
    ViewAllCategoriasComponent,
    DeleteCategoriaComponent,
    UpdateCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ]
})
export class CategoriaModule { }
