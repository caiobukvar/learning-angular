import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  name = '';
  amount = 0;
  products: Product[] = []


  constructor() { }

  ngOnInit(): void {
    this.products = [];
  }

  handleClick() {
    this.products.push({ productName: this.name, productAmount: this.amount })
  }
}
interface Product {
  productName: string;
  productAmount: number;
}
