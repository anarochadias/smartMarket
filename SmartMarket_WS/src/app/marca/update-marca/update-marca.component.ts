import { Component } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-marca',
  templateUrl: './update-marca.component.html',
  styleUrls: ['./update-marca.component.css']
})
export class UpdateMarcaComponent {
marcaList: Marca[]=[];
    currentMarca: number = 0;
    constructor(private service: MarcaService) {
    }
    ngOnInit(): void{
      this.service.getAllMarcas().subscribe(data=>{
        this.marcaList = data;
      });
    }
    onIndexChange(idMarca: any){
      this.currentMarca = idMarca;
      //console.log(this.currentLocation);
    }
    onUpdate(form: NgForm){
      let marca = {
        descricao: form.value.marcaName
      };
      console.log(this.currentMarca, marca);
      this.service.updateLocalizacao(this.currentMarca, marca).subscribe(data => {
        console.log(data);
      });
    }
}

