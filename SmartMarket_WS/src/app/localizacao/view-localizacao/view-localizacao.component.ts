import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-localizacao',
  templateUrl: './view-localizacao.component.html',
  styleUrls: ['./view-localizacao.component.css']
})
export class ViewLocalizacaoComponent implements OnInit {
  concelhoId = "0";
  concelhoName = "";
  constructor(private activateRoute: ActivatedRoute, private service: LocalizacaoService) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.concelhoId = data['id'];
    });
    this.service.getLocalizacao(this.concelhoId).subscribe(data => {
      this.concelhoId = data['ConcelhoId'];
      this.concelhoName = data['ConcelhoName'];
    });
  }
  getLocalizacao() {
  }
}