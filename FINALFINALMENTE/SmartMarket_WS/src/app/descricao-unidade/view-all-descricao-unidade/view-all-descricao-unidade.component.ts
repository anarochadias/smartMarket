import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';
import { CreateDescricaoUnidadeComponent } from '../create-descricao-unidade/create-descricao-unidade.component';
import { DeleteDescricaoUnidadeComponent } from '../delete-descricao-unidade/delete-descricao-unidade.component';
import { UpdateDescricaoUnidadeComponent } from '../update-descricao-unidade/update-descricao-unidade.component';

@Component({
  selector: 'app-view-all-descricao-unidade',
  templateUrl: './view-all-descricao-unidade.component.html',
  styleUrls: ['./view-all-descricao-unidade.component.css']
})

export class ViewAllDescricaoUnidadeComponent implements OnInit {
  descricaoUnidadeList: DescricaoUnidade[] = [];

  constructor(private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void {
    this.service.getAllDescricaoUnidade().subscribe(data => {
      this.descricaoUnidadeList = data;
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
  create = new CreateDescricaoUnidadeComponent(this.service);
  delete = new DeleteDescricaoUnidadeComponent(this.service);
  update = new UpdateDescricaoUnidadeComponent(this.service);
  
  jumpoTo(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }
}