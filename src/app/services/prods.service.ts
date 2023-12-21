import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {
  MY_SERVER = 'http://localhost:3000/prods';
  constructor(private prods:HttpClient) { }

  // crud
  getProducts(): Observable<any[]> {
    return this.prods.get<any[]>(this.MY_SERVER)  
  }
  addProducts(data:any): Observable<any> {
    return this.prods.post(this.MY_SERVER,data)
  }
  delProducts(id:string): Observable<any> {
    return this.prods.delete(`${this.MY_SERVER}/${id}`)
  }
  updProducts(data:any,id:string): Observable<any> {
    return this.prods.put(`${this.MY_SERVER}/${id}`,data)
  }
}

