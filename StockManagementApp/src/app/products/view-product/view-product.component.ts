import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  productId = "0";
  productName = "";
  familyId = "";
  ean13code = "";
  obs = ""
  constructor(private activateRoute: ActivatedRoute, private service: ProductsService){
  }
  ngOnInit(): void {
  this.activateRoute.params.subscribe(data => {
  this.productId = data['id'];
  });
  this.service.getProduct(this.productId).subscribe(data => {
    this.productId = data['productId'];
this.productName = data['productName'];
this.familyId = data['familyId'];
this.ean13code = data['ean13code'];
this.obs = data['obs'];
});
}
getProduct(){
}
}