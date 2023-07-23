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
  concelhoId = "0";
  concelhoName = "";
  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void {
  }
  createNewLocalizacao(form: NgForm) {
    let localizacao = {
      concelhoId: form.value.concelhoId,
      concelhoName: form.value.concelhoName,
      insertUserId: "user001",
      insertDateTime: "2023-05-02T12:00:00",
      lastModifiedUserId: "msm",
      lastModifiedDateTime: "2023-05-20T14:59:20.87"
    };
    this.service.createLocalizacao(localizacao).subscribe(data => {
      console.log(data);
    });
  }
}