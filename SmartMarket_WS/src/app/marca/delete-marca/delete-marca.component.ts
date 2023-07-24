import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca';;
@Component({
  selector: 'app-delete-marca',
  templateUrl: './delete-marca.component.html',
  styleUrls: ['./delete-marca.component.css']
})
export class DeleteMarcaComponent implements OnInit{
  marcaList: Marca[]=[];
  currentMarca: number = 0;
  constructor(private service: MarcaService) {
  }

  ngOnInit(): void {
    this.service.getAllMarcas().subscribe(data=>{
      this.marcaList = data;
    });
  }
  onIndexChange(idMarca: any){
    this.currentMarca = idMarca;
    //console.log(this.currentLocation);
  }
  onDelete(){
    this.service.deleteLocalizacao(this.currentMarca).subscribe(data => {
      console.log(data);
    });
  }

}
