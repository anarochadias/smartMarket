import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      this.idCategoria = data['idCategoria']; //changed
    });
  this.service.getCategoria(this.idCategoria).subscribe(data => {
        this.idCategoria = data['idCategoria'];
        this.descricao = data['descricao'];
     });
   }
  getCategoria() {
  }
}