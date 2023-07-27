import { LocalizacaoService } from '../localizacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeleteLocalizacaoComponent } from '../delete-localizacao/delete-localizacao.component';
import { UpdateLocalizacaoComponent } from '../update-localizacao/update-localizacao.component';

@Component({
  selector: 'app-view-localizacao',
  templateUrl: './view-localizacao.component.html',
  styleUrls: ['./view-localizacao.component.css']
})
export class ViewLocalizacaoComponent implements OnInit {
  idConcelho = 0;
  descricao = "";
  constructor(
  private activateRoute: ActivatedRoute,
  private service: LocalizacaoService) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.idConcelho = data['idConcelho'];
    });
    this.service.getLocalizacao(this.idConcelho).subscribe(data => {
      this.idConcelho = data['idConcelho'];
      this.descricao = data['descricao'];
    });
  }

  newBrand: string = "";

  upMar= new UpdateLocalizacaoComponent(this.service)

  dlMar= new DeleteLocalizacaoComponent(this.service)

  show = false;
  showUpdate(){
    this.show = true;
  }
}