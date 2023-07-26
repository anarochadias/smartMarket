import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './marca.component';
import { CreateMarcaComponent } from './create-marca/create-marca.component';
import { ViewAllMarcasComponent } from './view-all-marcas/view-all-marcas.component';
import {ViewMarcaComponent} from './view-marca/view-marca.component'
import {DeleteMarcaComponent} from './delete-marca/delete-marca.component'
import {UpdateMarcaComponent} from './update-marca/update-marca.component'

const routes: Routes = [{ path: '', component: MarcaComponent },
{path:'create-marca', component: CreateMarcaComponent},
{path:'view-all-marcas', component: ViewAllMarcasComponent},
{path: 'view-marca/:idMarca', component: ViewMarcaComponent},
{path: 'delete-marca', component: DeleteMarcaComponent},
{path: 'update-marca', component: UpdateMarcaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
