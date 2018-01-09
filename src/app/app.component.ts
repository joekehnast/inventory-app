import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product('sku12345', 'hat', 
    '/assets/images/productes/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'], 29.99),
    new Product('sku12345', 'hat', 
    '/assets/images/productes/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'], 29.99),
    new Product('sku12345', 'hat', 
    '/assets/images/productes/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'], 29.99)
  ]
  }
}
