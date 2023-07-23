import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {
  categoriaId ="0";
  descricaoCategoria = "";
  constructor(private service: CategoriaService) {
  }
  ngOnInit(): void {
  }
  createNewCategoria(form: NgForm) {
    let categoria = {
      IdCategoria: form.value.categoriaId,
      Descricao: form.value.descricaoCategoria,


    };
    this.service.createCategoria(categoria).subscribe(data => {
      console.log(data);
    });
  }
}

