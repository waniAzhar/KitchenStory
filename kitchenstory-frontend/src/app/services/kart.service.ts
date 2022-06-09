import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KartService {

  constructor(private http:HttpClient) { }
  addToKart(product:any):Observable<object>{
    return this.http.post("http://localhost:8080/Kart/add", product);
  }
  getBoughtItems():Observable<object>{
    return this.http.get("http://localhost:8080/Kart/all");
  }

  deleteAll():Observable<object>{
    return this.http.delete("http://localhost:8080/Kart/deleteall");
  }


  updateProducts(id:number, product:any):Observable<object>
  {
    return this.http.put(`http://localhost:8080/Kart/update/${id}`,product)
  }
}
