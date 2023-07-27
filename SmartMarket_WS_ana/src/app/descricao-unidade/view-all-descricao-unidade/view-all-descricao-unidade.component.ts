import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';

@Component({
  selector: 'app-view-all-descricao-unidade',
  templateUrl: './view-all-descricao-unidade.component.html',
  styleUrls: ['./view-all-descricao-unidade.component.css']
})
export class ViewAllDescricaoUnidadeComponent implements OnInit{
  descricaoUnidadeList: DescricaoUnidade[]=[];
  constructor(private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void{
    this.service.getAllDescricaoUnidade().subscribe(data =>{
      this.descricaoUnidadeList = data;
      console.log(this.descricaoUnidadeList);
    });
  }
}