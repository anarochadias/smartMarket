import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca';
import { CreateMarcaComponent } from '../create-marca/create-marca.component';
import { DeleteMarcaComponent } from '../delete-marca/delete-marca.component';
import { UpdateMarcaComponent } from '../update-marca/update-marca.component';
@Component({
  selector: 'app-view-all-marcas',
  templateUrl: './view-all-marcas.component.html',
  styleUrls: ['./view-all-marcas.component.css'],
})
export class ViewAllMarcasComponent implements OnInit {
  marcasList: Marca[] = [];

  constructor(private service: MarcaService) {}
  ngOnInit(): void {
    this.service.getAllMarcas().subscribe((data) => {
      this.marcasList = data;
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
  showUpdate(){
    this.showUp = true; 
  }
  

  newBrand: string="";
  newBrandUp: string="";
  passId: number=0;
  create = new CreateMarcaComponent(this.service);
  delete = new DeleteMarcaComponent(this.service);
  update = new UpdateMarcaComponent(this.service);
  
  jumpoTo(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }
}
