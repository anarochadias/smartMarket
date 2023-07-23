import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-all-localizacoes',
  templateUrl: './view-all-localizacoes.component.html',
  styleUrls: ['./view-all-localizacoes.component.css']
})

export class ViewAllLocalizacoesComponent implements OnInit{
  localizacaoList: Localizacao[]=[];
  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void{
    this.service.getAllLocalizacoes().subscribe(data=>{this.localizacaoList = data;
    });
  }
}