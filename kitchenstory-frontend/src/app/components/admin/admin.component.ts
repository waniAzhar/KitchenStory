import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public addProductForm:FormGroup;
  constructor(private formbuilder:FormBuilder, private productservice:ProductService) {
    this.addProductForm = this.formbuilder.group({
      productDescription:['', Validators.maxLength(100)],
      imageUrl:[''],
      productTitle:['', Validators.maxLength(20)],
      productPrice:[''],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.productservice.addProducts(form.value).subscribe(res =>{
      console.log(res)
    })
  }
}
