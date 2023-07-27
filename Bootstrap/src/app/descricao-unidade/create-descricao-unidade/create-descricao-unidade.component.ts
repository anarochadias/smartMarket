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
      descricao: form.value.unidadeNome,
      insertUserId: "user001",
      insertDateTime: "2023-05-02T12:00:00",
      lastModifiedUserId: "msm",
      lastModifiedDateTime: "2023-05-20T14:59:20.87"
    };
    this.service.createDescricaoUnidade(descricaoUnidade).subscribe(data => {
      console.log(data);
    });
  }
}