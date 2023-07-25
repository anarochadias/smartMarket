import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { ViewCategoriaComponent } from './view-categoria/view-categoria.component';
import { ViewAllCategoriasComponent } from './view-all-categorias/view-all-categorias.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';

const routes: Routes = [{
  path: '', component: CategoriaComponent },
  { path: 'create-categoria', component: CreateCategoriaComponent },
  { path: 'view-categoria/:idCategoria', component: ViewCategoriaComponent },//changed--------------------------------------
  { path: 'delete-categoria', component: DeleteCategoriaComponent },
  { path: 'update-categoria', component: UpdateCategoriaComponent },
  { path: 'view-all-categorias', component: ViewAllCategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }