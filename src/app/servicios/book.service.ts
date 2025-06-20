import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiUrl = 'https://10.0.139.111:3000/relatos/book';
 //private apiUrl = '/api/relatos/book';
  constructor(private http: HttpClient) { }


    getBooks(): Observable<any[]> {
          console.log("consumo de "+this.apiUrl);
    return this.http.post<any[]>(this.apiUrl,{});
  }
}
