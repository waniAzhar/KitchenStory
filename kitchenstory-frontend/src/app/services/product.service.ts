import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<object>
  {
    return this.http.get('http://localhost:8080/Product/all')
  }
  addProducts(product:any):Observable<object>
  {
    return this.http.post('http://localhost:8080/Product/add', product)
  }

  deleteProducts(id:number):Observable<object>
  {
    return this.http.delete(`http://localhost:8080/Product/delete/${id}`)
  }

  updateProducts(id:number, product:any):Observable<object>
  {
    return this.http.put(`http://localhost:8080/Product/update/${id}`,product)
  }
}
