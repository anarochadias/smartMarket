import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { ActivatedRoute } from '@angular/router';
import { UpdateMarcaComponent } from '../update-marca/update-marca.component';
import { DeleteMarcaComponent } from '../delete-marca/delete-marca.component';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-marca',
  templateUrl: './view-marca.component.html',
  styleUrls: ['./view-marca.component.css'],
})
export class ViewMarcaComponent implements OnInit {
  idMarca = 0;
  descricao = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private service: MarcaService
  ) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      this.idMarca = data['idMarca'];
    });
    this.service.getMarca(this.idMarca).subscribe((data) => {
      this.idMarca = data['idMarca'];
      this.descricao = data['descricao'];
    });
  }
  //getMarca() {}
  newBrand: string = "";
  // update(form: NgForm) {
  //   let upMar= new UpdateMarcaComponent(this.service)
  //   upMar.onUpdate(form);
  //   // window.location.reload(); //NOVO
  // }

  upMar= new UpdateMarcaComponent(this.service)

  dlMar= new DeleteMarcaComponent(this.service)

  show = false;
  showUpdate(){
    this.show = true;
  }
}
