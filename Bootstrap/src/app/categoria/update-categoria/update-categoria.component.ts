import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-Categoria',
  templateUrl: './update-Categoria.component.html',
  styleUrls: ['./update-Categoria.component.css']
})
export class UpdateCategoriaComponent {
  categoriaList: Categoria[]=[];
    currentCategoria: number = 0;
    constructor(private service: CategoriaService) {
    }
    ngOnInit(): void{
      this.service.getAllCategorias().subscribe(data=>{
        this.categoriaList = data;
      });
    }
    onIndexChange(idCategoria: any){
      this.currentCategoria = idCategoria;
      //console.log(this.currentLocation);
    }
    onUpdate(form: NgForm){
      let categoria = {
        descricao: form.value.categoriaNameNew
      };
      console.log(this.currentCategoria, categoria.descricao);
      this.service.updateCategoria(this.currentCategoria, categoria).subscribe(data => {
        console.log(data);
      });
    }
}