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
  unidadeName = "";
  constructor(private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void {
  }
  createNewDescricaoUnidade(form: NgForm) {
    let descricaoUnidade = {
      descricao: form.value.unidadeNome
    };
    this.service.createDescricaoUnidade(descricaoUnidade).subscribe(data => {
      console.log(data);
    });
  }
}