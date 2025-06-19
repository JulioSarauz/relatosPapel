import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiUrl = 'https://localhost:7777/relatos/book';
  constructor(private http: HttpClient) { }

    getBooks(): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl,{});
  }
}
