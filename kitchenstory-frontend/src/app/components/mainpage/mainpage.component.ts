import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KartService } from 'src/app/services/kart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  search:string="";
  buyForm:FormGroup;
  constructor(private productservice:ProductService, private kartservice:KartService, private formbuilder:FormBuilder) {
  this.buyForm = formbuilder.group({
    quantity:[1]
  })
  }
  product:any;
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res =>{
      this.product = res;
      console.log(this.product)
    })

    this.kartservice.deleteAll().subscribe(res=>{

    })

    this.kartservice.getBoughtItems().subscribe(res=>{
      console.log(res);
      this.items = res;
    })
  }
  quantityOfProduct:number = 1;
  items:any;

  addToKart(boughtItem:any){
        let x= this.buyForm.value;
        x["productId"] = boughtItem;
        console.log(x);

    let check:Boolean = false;
    this.kartservice.getBoughtItems().subscribe(res=>{
      this.items = res;
      for (let item of this.items){
        if (item.productId == boughtItem){

          check = true
          x["id"] = item.id

        }
        // if (item.productId == boughtItem && item.quantity != quantityOfProduct){
        //   this.kartservice.updateProducts(item.productId,myobject).subscribe(data =>{

        //   })
        // }


      }


    if(check == false){
      this.kartservice.addToKart(x).subscribe(data=>{
      })
    }
    if(check == true){

      this.kartservice.updateProducts(x.id, x).subscribe()
    }
    })

  }

}
