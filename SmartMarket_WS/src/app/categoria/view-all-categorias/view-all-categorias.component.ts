import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-view-all-categorias',
  templateUrl: './view-all-categorias.component.html',
  styleUrls: ['./view-all-categorias.component.css']
})
export class ViewAllCategoriasComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias(): void {
    this.service.getAllCategorias().subscribe(data=>{this.categorias = categorias;
    });
  }
}
