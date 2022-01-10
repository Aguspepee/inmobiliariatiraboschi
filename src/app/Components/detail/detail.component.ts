import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Productos } from 'src/app/interfaces/productos';
import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public productos: Productos[] = [];
  public id: string = "";
  constructor(
    private productService: ProductService, 
    private activatedRoute:ActivatedRoute ) {
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.productService.getProducts().subscribe(
      (prod: any) => {
        this.productos = prod.filter((prod:any)=>(prod.id==id));
        console.log("id",id)
        console.log(this.productos)
        
      }
    )
  }

}
