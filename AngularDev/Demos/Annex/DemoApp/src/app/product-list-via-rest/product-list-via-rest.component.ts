import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Product } from '../product'
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductViaRestService } from '../product-via-rest.service'

@Component({
  selector: 'app-product-list-via-rest',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list-via-rest.component.html',
  styleUrl: './product-list-via-rest.component.css'
})
export class ProductListViaRestComponent implements OnInit {

  productsTechnique1!: Observable<Array<Product>>; 
  productsTechnique2!: Array<Product>;

  constructor(private productViaRestService: ProductViaRestService) {}

  ngOnInit(): void {
    // Get products, technique 1 - just assign the Observable result directly.
    this.productsTechnique1 = this.productViaRestService.getProducts();
    
    // Get product, technique 2 - subscribe to the service.
    this.productViaRestService.getProducts().subscribe({
        next: (data:any) => this.productsTechnique2 = data,
        error: (_:any)  => console.log("Error")
    });
  }
}
