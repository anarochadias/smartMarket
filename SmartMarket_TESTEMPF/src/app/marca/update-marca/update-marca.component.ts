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
      console.log(this.currentMarca);
    }
    onUpdate(form: NgForm){
      let marca = {
        descricao: form.value.marcaName
      };

      if (marca.descricao == "") {
        return window.alert('Please insert the new brand name.');
       }

       if (this.currentMarca == 0) {
        return window.alert('Please choose a brand to update.');
       }

      console.log(this.currentMarca, marca);
      this.service.updateLocalizacao(this.currentMarca, marca).subscribe(data => {
        console.log(data);
      });
      window.location.reload(); //NOVO
      window.alert('Brand updated successfully.')

    }
    
    onUpdateId(idMarca: number, descricao:string){
      let marca = {
        descricao: descricao
      };

      if (marca.descricao == "") {
        return window.alert('Please insert the new brand name.');
       }
      console.log(idMarca, descricao);
      this.service.updateLocalizacao(idMarca, marca).subscribe(data => {
        console.log(data);
      });
      window.location.reload(); //NOVO
      window.alert('Brand updated successfully.')
    }
}

