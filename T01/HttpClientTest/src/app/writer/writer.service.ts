import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Writer } from '../models/writer';

@Injectable()
export class WriterService {

  constructor(private http: HttpClient) { }


  textUrl = "/api/message";
  getTextMsg(): Observable<string> {
    return this.http.get(this.textUrl, { responseType: 'text' });
  }

  writerUrl = "/api/writer";
  getWriterWithFavBooks(): Observable<any> {
    return this.http.get(this.writerUrl, { responseType: 'json' });
  }
  getFavoriteWriter(): Observable<Writer> {
    return this.http.get<Writer>(this.writerUrl, { responseType: 'json' });
  }
}
