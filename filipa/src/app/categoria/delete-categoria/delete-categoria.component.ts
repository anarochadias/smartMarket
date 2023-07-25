import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {
  categoriaId: number = 0;
  categoriaList: Categoria[]=[];

  constructor(private service: CategoriaService) {
  }
  ngOnInit(): void {
    this.service.getAllCategorias().subscribe(data => {
      this.categoriaList = data;
    });
  }
  onIndexChange(idCategoria: any) {
    this.categoriaId = idCategoria;
    //console.log(this.currentLocation);
  }
  onDelete() {
    this.service.deleteCategoria(this.categoriaId).subscribe(data => {
      console.log(data);
    });
  }
}
