import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-all-categorias',
  templateUrl: './view-all-categorias.component.html',
  styleUrls: ['./view-all-categorias.component.css']
})

export class ViewAllCategoriasComponent implements OnInit{
  categoriasList: Categoria[]=[];
  constructor(private service: CategoriaService) {
  }
  ngOnInit(): void{
    this.service.getAllCategorias().subscribe(data=>{
      this.categoriasList = data;
      console.log(this.categoriasList);
    });
    
  }
}