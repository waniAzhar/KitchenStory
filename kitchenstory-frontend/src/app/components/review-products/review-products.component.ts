import { Component, OnInit } from '@angular/core';
import { KartService } from 'src/app/services/kart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-review-products',
  templateUrl: './review-products.component.html',
  styleUrls: ['./review-products.component.css']
})
export class ReviewProductsComponent implements OnInit {
  product:any
  boughtitems:any
  search:string=""
  constructor(private productservice:ProductService,private kartservice:KartService) { }
  total:number = 0;
  ngOnInit(): void {
    this.kartservice.getBoughtItems().subscribe(res=>{
      console.log(res)
      this.boughtitems = res;

    })

    this.productservice.getProducts().subscribe(res =>{
      this.product = res;
      console.log(this.product)

      let start:number = 0;
      for(let each of this.product){
        for(let item of this.boughtitems ){
            console.log(each)
            if(each.id == item.productId){
              start +=  (parseInt(each.productPrice) * item.quantity)
              console.log(each.productPrice)
            }
          }

        }
        this.total = start
    })
  }


}
