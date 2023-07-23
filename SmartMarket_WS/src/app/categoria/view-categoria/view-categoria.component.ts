import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria';


@Component({
  selector: 'app-view-categoria',
  templateUrl: './view-categoria.component.html',
  styleUrls: ['./view-categoria.component.css']
})
export class ViewCategoriaComponent implements OnInit {
  categoriaId ="0";
  descricaoCategoria = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Fetch the categoria object from the route data resolved in the router configuration
    this.route.data.subscribe(data => {
      this.categoria = data.categoria;
    });
  }
}