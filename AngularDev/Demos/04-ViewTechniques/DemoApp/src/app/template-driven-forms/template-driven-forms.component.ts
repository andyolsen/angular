import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

// Define a class to represent a category.
class Category {
  constructor(public id?: number,public name?: string) {} 
}

// Define a class to represent a single product.
class Product {
  constructor(
    public description?: string, 
    public category?: string, 
    public categoryAsObject?: Category, 
    public supplierEmail?: string,
    public price?: number,
    public additionalInfo?: string
  ) {}
}

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  categories = ['Clothing', 'Audio/Video', 'Auto', 'Food/Drink'];

  categoriesAsObjects = [ 
    new Category(0, 'Clothing'), 
    new Category(1, 'Audio/Video'),
    new Category(2, 'Auto'), 
    new Category(3, 'Food/Drink')
  ];

  currentProduct = new Product();
  allProducts: Array<Product> = [];

  categoryById(c1: Category, c2: Category) {
    return c1 && c2 && c1.id == c2.id;
  }

  onSubmit(form: NgForm) { 
    this.allProducts.push(this.currentProduct);
    this.currentProduct = new Product();
    form.reset();
  }
}