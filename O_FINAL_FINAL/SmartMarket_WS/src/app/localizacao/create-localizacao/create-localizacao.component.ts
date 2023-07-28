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
  concelho = '';

  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void {}

createNewLocalizacaoId(desc: string) {
    let localizacao = {
      concelho: desc,
    };

    if (localizacao.concelho == "") {
      return window.alert('Please insert the location name.');
     }

    this.service.createLocalizacao(localizacao).subscribe((data) => console.log(data));

    window.location.reload();
    window.alert('Location inserted successfully.')
  }

  createNewLocalizacao(form: NgForm) {
    let localizacao = {
      concelho: form.value.concelhoName,
    };

    if (localizacao.concelho == "") {
      return window.alert('Please insert the location name.');
     }

    this.service.createLocalizacao(localizacao).subscribe((data) => console.log(data));
      window.location.reload();
      window.alert('Location inserted successfully.')
    };
  }