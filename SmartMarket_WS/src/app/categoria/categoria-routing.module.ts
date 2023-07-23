import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { ViewAllCategoriasComponent } from './view-all-categorias/view-all-categorias.component';
import { ViewCategoriaComponent } from './view-categoria/view-categoria.component';

const routes: Routes = [{ 
  path: '', component: CategoriaComponent },
  {path: 'ViewAllCategorias', component: ViewAllCategoriasComponent},
  {path: 'ViewCategoria', component: ViewCategoriaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }