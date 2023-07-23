import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
// import { DeleteProductComponent } from './delete-product/delete-product.component';
// import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  // { path: 'delete-product/:id', component: DeleteProductComponent },
  // { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'view-all-products', component: ViewAllProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

