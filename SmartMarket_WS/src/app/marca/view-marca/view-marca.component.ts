import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { ActivatedRoute } from '@angular/router';

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
  getMarca() {}
}
