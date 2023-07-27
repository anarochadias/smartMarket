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
  currentLocation: number = 0;
  constructor(private service: LocalizacaoService) {
  }
  ngOnInit(): void {
    this.service.getAllLocalizacoes().subscribe(data => {
      this.localizacaoList = data;
    });
  }
  onIndexChange(idLocation: any) {
    this.currentLocation = idLocation;
    console.log(this.currentLocation);
  }
  onUpdate(form: NgForm) {
    let localizacao = {
      descricao: form.value.concelhoName
    };

    if (localizacao.descricao == "") {
      return window.alert('Please insert the new location name.');
    }

    if (this.currentLocation == 0) {
      return window.alert('Please choose a location to update.');
    }

    console.log(this.currentLocation, localizacao);
    this.service.updateLocalizacao(this.currentLocation, localizacao).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Location updated successfully.')
  }

  onUpdateId(idLocation: number, descricao: string) {
    let localizacao = {
      descricao: descricao
    };

    if (localizacao.descricao == "") {
      return window.alert('Please insert the new location name.');
    }
    console.log(idLocation, descricao);
    this.service.updateLocalizacao(idLocation, localizacao).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Location updated successfully.')
  }
}
