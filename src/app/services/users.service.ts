import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBase = 'https://backendtf-cddu.onrender.com/users'

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }

    return this.http.get(this.urlBase, httpOptions);
  }

  public getUsuario(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http.get(`${this.urlBase}/${id}`, httpOptions);
  }

  public createUsuario(usuario: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http.post(this.urlBase, usuario, httpOptions);
  }

  public updateUsuario(id: string, usuario: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http.put(`${this.urlBase}/${id}`, usuario, httpOptions);
  }

  public deleteUsuario(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http.delete(`${this.urlBase}/${id}`, httpOptions);
  }
}
