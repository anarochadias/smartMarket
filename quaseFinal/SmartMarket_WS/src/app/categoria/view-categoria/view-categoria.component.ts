import { CategoriaService } from '../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeleteCategoriaComponent } from '../delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from '../update-categoria/update-categoria.component';

@Component({
  selector: 'app-view-categoria',
  templateUrl: './view-categoria.component.html',
  styleUrls: ['./view-categoria.component.css']
})
export class ViewCategoriaComponent implements OnInit {
  idCategoria = 0;
  descricao = "";
  constructor(private activateRoute: ActivatedRoute, private service: CategoriaService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.idCategoria = data['idCategoria'];
    });
  this.service.getCategoria(this.idCategoria).subscribe(data => {
        this.idCategoria = data['idCategoria'];
        this.descricao = data['descricao'];
     });
   }
   newBrand: string = "";

   upMar= new UpdateCategoriaComponent(this.service)
 
   dlMar= new DeleteCategoriaComponent(this.service)
 
   show = false;
   showUpdate(){
     this.show = true;
   }
}