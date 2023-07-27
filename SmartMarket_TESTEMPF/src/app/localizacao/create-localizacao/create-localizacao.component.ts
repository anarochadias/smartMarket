import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-localizacao',
  templateUrl: './create-localizacao.component.html',
  styleUrls: ['./create-localizacao.component.css']
})

export class CreateLocalizacaoComponent implements OnInit {
  concelhoName = "";
  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void {
  }
  createNewLocalizacao(form: NgForm) {
    let localizacao = {
      concelho: form.value.concelhoName
    };
    this.service.createLocalizacao(localizacao).subscribe(data => {
      console.log(data);
    });
  }
}