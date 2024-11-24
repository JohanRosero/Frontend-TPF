import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBase = 'http://localhost:4000/users'

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }

    return this.http.get(this.urlBase, httpOptions);
  }
}
