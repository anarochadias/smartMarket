import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Component, OnInit } from '@angular/core';
import { CreateCategoriaComponent } from '../create-categoria/create-categoria.component';
import { DeleteCategoriaComponent } from '../delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from '../update-categoria/update-categoria.component';

@Component({
  selector: 'app-view-all-categorias',
  templateUrl: './view-all-categorias.component.html',
  styleUrls: ['./view-all-categorias.component.css']
})

export class ViewAllCategoriasComponent implements OnInit {
  categoriasList: Categoria[] = [];

  constructor(private service: CategoriaService) {}
  ngOnInit(): void {
    this.service.getAllCategorias().subscribe(data => {
      this.categoriasList = data;
    });
  }
  
  show = false;
  showUp = false;
  showCreate(){
    this.show = true; 
  }
  hideCreate(){
    this.show = false; 
  }
  hideUpd(){
    this.showUp = false; 
  }
  showUpdate(){
    this.showUp = true; 
  }
  
  newBrand: string="";
  newBrandUp: string="";
  passId: number=0;
  create = new CreateCategoriaComponent(this.service);
  delete = new DeleteCategoriaComponent(this.service);
  update = new UpdateCategoriaComponent(this.service);
  
  jumpoTo(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }
}