import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})

export class DeleteCategoriaComponent implements OnInit {
  categoriaList: Categoria[]=[];
  currentCategoria: number = 0;

  constructor(private service: CategoriaService) {
  }

  ngOnInit(): void {
    this.service.getAllCategorias().subscribe(data => {
      this.categoriaList = data;
    });
  }

  onIndexChange(idCategoria: any) {
    this.currentCategoria = idCategoria;
  }

  onDelete() {
    this.service.deleteCategoria(this.currentCategoria).subscribe(data => {console.log(data);});

    if (this.currentCategoria == 0) {
      return window.alert('Please choose a category to delete.');
     }

    console.log(this.currentCategoria);
    window.location.reload();
    window.alert('Category deleted successfully.')
  }

  onDeleteId(id: number){
    this.service.deleteCategoria(id).subscribe(data => {
      console.log(data);
    });
    window.location.href="categoria/view-all-categorias";
    window.alert('Category deleted successfully.')
  }
}