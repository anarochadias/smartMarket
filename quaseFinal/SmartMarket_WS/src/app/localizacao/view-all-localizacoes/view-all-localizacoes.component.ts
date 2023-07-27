import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { Component, OnInit } from '@angular/core';
import { CreateLocalizacaoComponent } from '../create-localizacao/create-localizacao.component';
import { DeleteLocalizacaoComponent } from '../delete-localizacao/delete-localizacao.component';
import { UpdateLocalizacaoComponent } from '../update-localizacao/update-localizacao.component';

@Component({
  selector: 'app-view-all-localizacoes',
  templateUrl: './view-all-localizacoes.component.html',
  styleUrls: ['./view-all-localizacoes.component.css']
})

export class ViewAllLocalizacoesComponent implements OnInit{
  localizacaoList: Localizacao[]=[];

  constructor(private service: LocalizacaoService) {}
  ngOnInit(): void{
    this.service.getAllLocalizacoes().subscribe(data=>{
      this.localizacaoList = data;
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
  create = new CreateLocalizacaoComponent(this.service);
  delete = new DeleteLocalizacaoComponent(this.service);
  update = new UpdateLocalizacaoComponent(this.service);
  
  jumpoTo(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }
}