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
  }
  onDelete(){
    this.service.deleteLocalizacao(this.currentMarca).subscribe(data => {
      console.log(data);
    });

    if (this.currentMarca == 0) {
      return window.alert('Please choose a brand to delete.');
     }

    console.log(this.currentMarca);
    window.location.reload(); //NOVO
    window.alert('Brand deleted successfully.')
  }
  onDeleteId(id: number){
    this.service.deleteLocalizacao(id).subscribe(data => {
      console.log(data);
    });
    window.location.href="marca/view-all-marcas"; //NOVO
    window.alert('Brand deleted successfuly.')
  }
}
