import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product'

export interface ISale {
  productDescription: string;
  quantity: number;
};

@Component({
  selector: 'app-product-item-with-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item-with-sales.component.html',
  styleUrl: './product-item-with-sales.component.css'
})
export class ProductItemWithSalesComponent implements OnInit {

  @Input({required: true}) 
  product!: Product;
  
  @Output() 
  sale: EventEmitter<ISale> = new EventEmitter();

  ngOnInit() {
      setInterval(() => {
          let eventData: ISale = {
              productDescription: this.product.description,
              quantity: 1 + Math.floor(3*Math.random())
          };
          this.sale.emit(eventData);
      }, 
      1000 + (5000 *Math.random()));
  }
}