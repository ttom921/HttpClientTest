import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WriterService } from './writer.service';
import { Book } from '../models/book';
import { Writer } from '../models/writer';
import { HttpErrorResponse } from '@angular/common/http/src/response';
@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  obsTextMsg: Observable<string>;
  favBooks: Book[];
  favWriter: Writer;
  constructor(
    private http: HttpClient,
    private writerService: WriterService
  ) { }

  ngOnInit() {
    this.getTextMsg();
    this.getWriterWithFavBooks();
    this.getFavoriteWriter();
  }
  getTextMsg() {
    this.obsTextMsg = this.writerService.getTextMsg();
    this.writerService.getTextMsg().subscribe(
      msg => console.log(msg)
    );
  }

  getWriterWithFavBooks() {
    this.writerService.getWriterWithFavBooks().subscribe(
      data => {
        console.log(data);
        this.favBooks = data['books'];
      }
    );
  }
  getFavoriteWriter() {
    this.writerService.getWriterWithFavBooks().subscribe(
      data => {
        this.favWriter = data;
        console.log(this.favWriter.books);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          //Backend returns unsuccessful response codes such as 404, 500 etc.	
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      }
    );
  }
}
