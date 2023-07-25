import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-localizacao',
  templateUrl: './update-localizacao.component.html',
  styleUrls: ['./update-localizacao.component.css']
})
export class UpdateLocalizacaoComponent {
  localizacaoList: Localizacao[]=[];
    currentLocation: number = 0;
    constructor(private service: LocalizacaoService) {
    }
    ngOnInit(): void{
      this.service.getAllLocalizacoes().subscribe(data=>{
        this.localizacaoList = data;
      });
    }
    onIndexChange(idLocation: any){
      this.currentLocation = idLocation;
      //console.log(this.currentLocation);
    }
    onUpdate(form: NgForm){
      let localizacao = {
        concelho: form.value.concelhoNameNew
      };
      console.log(this.currentLocation, localizacao);
      this.service.updateLocalizacao(this.currentLocation, localizacao).subscribe(data => {
        console.log(data);
      });
    }
}
