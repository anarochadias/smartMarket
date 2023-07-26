import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  productList: Product[]=[
    {productName: 'Cool Lettuce', productDesc:'Mike', productPrice:'1.20€'},
    {productName: 'Cool Beans', productDesc:'Mike', productPrice:'1.00€'},
    {productName: 'Cool Rice', productDesc:'Mike', productPrice:'1.40€'},
    {productName: 'Cool Sausages', productDesc:'Mike', productPrice:'2.25€'},
    {productName: 'Cool Potatoes', productDesc:'Mike', productPrice:'1.26€'}
  ];
}