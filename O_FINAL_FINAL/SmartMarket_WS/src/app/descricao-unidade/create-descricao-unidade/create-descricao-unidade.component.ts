import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-descricao-unidade',
  templateUrl: './create-descricao-unidade.component.html',
  styleUrls: ['./create-descricao-unidade.component.css']
})

export class CreateDescricaoUnidadeComponent implements OnInit {
  descricao = '';

  constructor(private service: DescricaoUnidadeService) {}

  ngOnInit(): void {}

  createNewDescricaoUnidadeId(desc: string) {
    let descricaoUnidade = {
      descricao: desc,
    };

    if (descricaoUnidade.descricao == "") {
      return window.alert('Please insert the unit name.');
     }

    this.service.createDescricaoUnidade(descricaoUnidade).subscribe((data) => console.log(data));

    window.location.reload();
    window.alert('Unit inserted successfully.')
  }

  createNewDescricaoUnidade(form: NgForm) {
    let descricaoUnidade = {
      descricao: form.value.unidadeName,
    };

    if (descricaoUnidade.descricao == "") {
      return window.alert('Please insert the unit name.');
     }

    this.service.createDescricaoUnidade(descricaoUnidade).subscribe((data) => console.log(data));
    window.location.reload();
    window.alert('Unit inserted successfully.')
  }
}