import { Component } from '@angular/core';
import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-localizacao',
  templateUrl: './update-localizacao.component.html',
  styleUrls: ['./update-localizacao.component.css']
})
export class UpdateLocalizacaoComponent {
  localizacaoList: Localizacao[] = [];
  currentLocalizacao: number = 0;
  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void {
    this.service.getAllLocalizacoes().subscribe(data => {
      this.localizacaoList = data;
    });
  }
  onIndexChange(idConcelho: any) {
    this.currentLocalizacao = idConcelho;
    console.log(this.currentLocalizacao);
  }
  onUpdate(form: NgForm) {
    let localizacao = {
      concelho: form.value.concelhoName
    };

    if (localizacao.concelho == "") {
      return window.alert('Please insert the new location name.');
    }

    if (this.currentLocalizacao == 0) {
      return window.alert('Please choose a location to update.');
    }

    console.log(this.currentLocalizacao, localizacao);
    this.service.updateLocalizacao(this.currentLocalizacao, localizacao).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Location updated successfully.')
  }

  onUpdateId(idConcelho: number, concelho: string) {
    let localizacao = {
      concelho: concelho
    };

    if (localizacao.concelho == "") {
      return window.alert('Please insert the new location name.');
    }
    console.log(idConcelho, concelho);
    this.service.updateLocalizacao(idConcelho, localizacao).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Location updated successfully.')
  }
}
