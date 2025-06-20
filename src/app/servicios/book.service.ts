import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiUrl = 'https://10.0.139.111:3000/relatos/book';
  constructor(private http: HttpClient) { }

    getBooks(): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl,{});
  }
}
