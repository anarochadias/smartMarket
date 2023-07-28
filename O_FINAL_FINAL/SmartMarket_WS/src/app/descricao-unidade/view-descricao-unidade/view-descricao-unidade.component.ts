import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DeleteDescricaoUnidadeComponent } from '../delete-descricao-unidade/delete-descricao-unidade.component';
import { UpdateDescricaoUnidadeComponent } from '../update-descricao-unidade/update-descricao-unidade.component';

@Component({
  selector: 'app-view-descricao-unidade',
  templateUrl: './view-descricao-unidade.component.html',
  styleUrls: ['./view-descricao-unidade.component.css']
})
export class ViewDescricaoUnidadeComponent implements OnInit{
  idDescricaoUnidade = 0;
  descricao = '';
  constructor(
  private activateRoute: ActivatedRoute,
  private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.idDescricaoUnidade = data['idDescricaoUnidade'];
    });
    this.service.getDescricaoUnidade(this.idDescricaoUnidade).subscribe(data => {
      this.idDescricaoUnidade = data['idDescricaoUnidade'];
      this.descricao = data['descricao'];
    });
  }
  newBrand: string = "";

  upMar= new UpdateDescricaoUnidadeComponent(this.service)

  dlMar= new DeleteDescricaoUnidadeComponent(this.service)

  show = false;
  showUpdate(){
    this.show = true;
  }
}