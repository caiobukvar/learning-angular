import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() name!: string;
  @Input() amount!: number;
  @Input() products!: Array<{ productName: string, productAmount: number }>

  constructor() { }

  ngOnInit(): void { }

  removeProduct(productName: string) {
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].productName === productName) {
        this.products.splice(index, 1);
        break;
      }
    }
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }
}
