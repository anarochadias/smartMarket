import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-Categoria',
  templateUrl: './update-Categoria.component.html',
  styleUrls: ['./update-Categoria.component.css']
})
export class UpdateCategoriaComponent {
  categoriaList: Categoria[] = [];
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
    console.log(this.currentCategoria);
  }
  onUpdate(form: NgForm) {
    let categoria = {
      descricao: form.value.categoriaName
    };

    if (categoria.descricao == "") {
      return window.alert('Please insert the new category name.');
    }

    if (this.currentCategoria == 0) {
      return window.alert('Please choose a category to update.');
    }

    console.log(this.currentCategoria, categoria);
    this.service.updateCategoria(this.currentCategoria, categoria).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Category updated successfully.')
  }

  onUpdateId(idCategoria: number, descricao: string) {
    let categoria = {
      descricao: descricao
    };

    if (categoria.descricao == "") {
      return window.alert('Please insert the new category name.');
    }
    console.log(idCategoria, descricao);
    this.service.updateCategoria(idCategoria, categoria).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Category updated successfully.')
  }
}