import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  storageVal = localStorage.getItem('products')
  val = this.storageVal ? JSON.parse(this.storageVal) : []

  name = '';
  amount = 0;
  products: Product[] = []


  constructor() { }

  ngOnInit(): void {
    if (this.storageVal) {
      this.products = JSON.parse(this.storageVal);
    } else {
      this.products = [];
    }
  }

  handleClick() {
    if (this.name === '') {
      return alert('Produto precisa de um nome!')
    } else {
      this.products.push({ productName: this.name, productAmount: this.amount })
      localStorage.setItem('products', JSON.stringify(this.products));
      console.log(this.products);
    }
  }

  renderProducts() {
    const productList = this.products.map(product => ({
      productName: product.productName,
      productAmount: product.productAmount
    }));
    return productList;
  }

}
interface Product {
  productName: string;
  productAmount: number;
}
