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
}
