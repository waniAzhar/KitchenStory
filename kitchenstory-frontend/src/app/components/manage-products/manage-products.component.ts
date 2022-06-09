import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  updateForm:FormGroup
  search:string=""
  constructor(private productservice:ProductService, private router:Router, formbuilder:FormBuilder) {
    this.updateForm = formbuilder.group({
      imageUrl: [""],
      productTitle: [""],
      productDescription: [""],
      productPrice: [""]
    })
   }
  product:any;
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(res =>{
      this.product = res;
      console.log(this.product)
    })
  }

  deleteProduct(id:number){
    this.productservice.deleteProducts(id).subscribe(res=>{
      window.location.reload();
    })
  }


  updateProduct(product:any){
    for(let each in this.updateForm.value){
      if(this.updateForm.value[each] != ""){
        product[each] = this.updateForm.value[each]
        this.updateForm.value[each]
      }
    }
    console.log(product)
    this.productservice.updateProducts(product.id,product).subscribe(res=>{

    })
    }


}
