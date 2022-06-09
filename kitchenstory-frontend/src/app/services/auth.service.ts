import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<object>
  {
    return this.http.get('http://localhost:8080/all')
  }
  addUsers(user:any):Observable<object>
  {
    return this.http.post('http://localhost:8080/add', user)
  }
}
