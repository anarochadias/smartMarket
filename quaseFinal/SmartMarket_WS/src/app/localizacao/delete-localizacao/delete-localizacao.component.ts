import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from '../localizacao.service';
import { Localizacao } from '../localizacao';

@Component({
  selector: 'app-delete-localizacao',
  templateUrl: './delete-localizacao.component.html',
  styleUrls: ['./delete-localizacao.component.css']
})

export class DeleteLocalizacaoComponent  implements OnInit{
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
    }

    onDelete(){
      this.service.deleteLocalizacao(this.currentLocation).subscribe(data => {console.log(data);});
      
    if (this.currentLocation == 0) {
      return window.alert('Please choose a location to delete.');
     }

    console.log(this.currentLocation);
    window.location.reload();
    window.alert('Location deleted successfully.')
    }

    onDeleteId(id: number){
      this.service.deleteLocalizacao(id).subscribe(data => {
        console.log(data);
      });
      window.location.href="localizacao/view-all-localizacoes";
      window.alert('Location deleted successfully.')
    }
  }
  