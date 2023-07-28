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
  descricao = '';

  constructor(private service: CategoriaService) {}

  ngOnInit(): void {}

  createNewCategoriaId(desc: string) {
    let categoria = {
      descricao: desc,
    };

    if (categoria.descricao == "") {
      return window.alert('Please insert the category name.');
     }

    this.service.createCategoria(categoria).subscribe((data) => console.log(data));

    window.location.reload();
    window.alert('Category inserted successfully.')
  }

  createNewCategoria(form: NgForm) {
    let categoria = {
      descricao: form.value.categoriaName,
    };

    if (categoria.descricao == "") {
      return window.alert('Please insert the category name.');
     }

    this.service.createCategoria(categoria).subscribe((data) => console.log(data));
    window.location.reload();
    window.alert('Category inserted successfully.')
  }
}