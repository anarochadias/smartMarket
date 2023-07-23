import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productId = "0";
  productName = "";
  familyId = "";
  ean13code = "";
  obs = ""
  constructor(private service: ProductsService) {
  }
  ngOnInit(): void {
  }
  createNewProduct(form: NgForm) {
    let product = {
      productId: form.value.productId,
      productName: form.value.productName,
      familyId: form.value.familyId,
      ean13code: form.value.ean13code,
      obs: form.value.obs,
      insertUserId: "user001",
      insertDateTime: "2023-05-02T12:00:00",
      lastModifiedUserId: "msm",
      lastModifiedDateTime: "2023-05-20T14:59:20.87",
      family: "FAM001"
    };
    this.service.createProduct(product).subscribe(data => {
      console.log(data);
    });
  }
}