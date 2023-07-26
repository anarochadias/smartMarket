import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-descricao-unidade',
  templateUrl: './update-descricao-unidade.component.html',
  styleUrls: ['./update-descricao-unidade.component.css']
})
export class UpdateDescricaoUnidadeComponent implements OnInit{
  unidadeList: DescricaoUnidade[]=[];
  currentUnidade: number = 0;
  constructor(private service: DescricaoUnidadeService) {
  }
  ngOnInit(): void{
    this.service.getAllDescricaoUnidade().subscribe(data=>{
      this.unidadeList = data;
    });
  }
  onIndexChange(idDescricaoUnidade: any){
    this.currentUnidade = idDescricaoUnidade;
    console.log(this.currentUnidade);
  }
  onUpdate(form: NgForm){
    let descricaoUnidade = {
      descricao: form.value.nomeUnidadeNova
    };
    this.service.updateDescricaoUnidade(this.currentUnidade, descricaoUnidade).subscribe(data => {
      console.log(data);
    });
  }
}