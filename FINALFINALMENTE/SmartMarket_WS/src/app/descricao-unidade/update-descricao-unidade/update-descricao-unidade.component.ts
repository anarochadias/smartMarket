import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-descricao-unidade',
  templateUrl: './update-descricao-unidade.component.html',
  styleUrls: ['./update-descricao-unidade.component.css']
})
export class UpdateDescricaoUnidadeComponent {
  unidadeList: DescricaoUnidade[] = [];
  currentUnidade: number = 0;
  constructor(private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void {
    this.service.getAllDescricaoUnidade().subscribe(data => {
      this.unidadeList = data;
    });
  }
  onIndexChange(idDescricaoUnidade: any) {
    this.currentUnidade = idDescricaoUnidade;
    console.log(this.currentUnidade);
  }
  onUpdate(form: NgForm) {
    let unidade = {
      descricao: form.value.unidadeName
    };

    if (unidade.descricao == "") {
      return window.alert('Please insert the new unit name.');
    }

    if (this.currentUnidade == 0) {
      return window.alert('Please choose a unit to update.');
    }

    console.log(this.currentUnidade, unidade);
    this.service.updateDescricaoUnidade(this.currentUnidade, unidade).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Unit updated successfully.')
  }

  onUpdateId(idDescricaoUnidade: number, descricao: string) {
    let unidade = {
      descricao: descricao
    };

    if (unidade.descricao == "") {
      return window.alert('Please insert the new unit name.');
    }
    console.log(idDescricaoUnidade, descricao);
    this.service.updateDescricaoUnidade(idDescricaoUnidade, unidade).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
    window.alert('Unit updated successfully.')
  }
}