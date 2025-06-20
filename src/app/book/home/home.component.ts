import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/servicios/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  libros: any[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
     this.bookService.getBooks().subscribe((data:any) => {
      console.log(data);
      
      this.libros = data.data;      
    });
  }

}
