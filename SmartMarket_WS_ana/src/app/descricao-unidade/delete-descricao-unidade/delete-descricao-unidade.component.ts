import { Component, OnInit } from '@angular/core';
import { DescricaoUnidadeService } from '../descricao-unidade.service';
import { DescricaoUnidade } from '../descricao-unidade';

@Component({
  selector: 'app-delete-descricao-unidade',
  templateUrl: './delete-descricao-unidade.component.html',
  styleUrls: ['./delete-descricao-unidade.component.css']
})
export class DeleteDescricaoUnidadeComponent implements OnInit{
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
    }
    onDelete(){
      this.service.deleteDescricaoUnidade(this.currentUnidade).subscribe(data => {
        console.log(data);
      });
    }
}