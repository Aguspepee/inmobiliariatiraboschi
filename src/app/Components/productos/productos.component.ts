import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Productos[] = [];
  
  constructor(private productService: ProductService) {  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (prod: any) => {
        this.productos = prod;
        console.log(this.productos)
      }
    )
  }

}
