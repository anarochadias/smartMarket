import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../marca';

@Component({
  selector: 'app-view-all-marcas',
  templateUrl: './view-all-marcas.component.html',
  styleUrls: ['./view-all-marcas.component.css'],
})
export class ViewAllMarcasComponent implements OnInit {
  marcasList: Marca[] = [];

  constructor(private service: MarcaService) {}
  ngOnInit(): void {
    this.service.getAllMarcas().subscribe((data) => {
      this.marcasList = data;
    });
  }
}
