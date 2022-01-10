import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product={
    name:"",
    price:"",
    detail:""
  }

  constructor(private productoService: ProductService) { }


  ngOnInit(): void {
  }

}
