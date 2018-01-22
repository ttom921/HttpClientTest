import { Food } from './../models/food';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Book } from '../models/demoentity';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:5100/api/Foods/';
  apibookurl = 'http://localhost:5100/api/Books/';
  specurl='http://localhost:5100/api/Foods/PutBook';
  //
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get(this.apiUrl),
      this.http.get(this.apibookurl)
    );
  }

  createOFood(book: Book) {
    const body = JSON.stringify(book);
    return this.http.post(this.specurl, body, httpOptions);
  }
  // 食物
  // 取得所有的食物
  getFoods(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // send a POST request to the API to create a new data object
  // 增加一筆
  createFood(food) {
    const body = JSON.stringify(food);
    return this.http.post(this.apiUrl, body, httpOptions);
  }
  // 更新
  updateFood(food) {
    const body = JSON.stringify(food);
    return this.http.put(this.apiUrl + food.id, body, httpOptions);
  }
  // 刪除
  deleteFood(food) {
    return this.http.delete(this.apiUrl + food.id);
  }
  // 書
  getBooks(): Observable<any> {
    return this.http.get(this.apibookurl);
  }
  createBook(book) {
    const body = JSON.stringify(book);
    return this.http.post(this.apibookurl, body, httpOptions);
  }
  updateBook(book) {
    const body = JSON.stringify(book);
    return this.http.put(this.apibookurl + book.id, body, httpOptions);
  }
  deleteBook(book) {
    return this.http.delete(this.apibookurl + book.id);
  }
  // ---------------------------------------------
  // baseUrl = 'http://localhost:5100';
  // //
  // foodUrl = this.baseUrl + '/Angular/Client/GetAll/';
  // getFoods(): Observable<any> {
  //   return this.http.get(this.foodUrl);
  // }
  // // send a POST request to the API to create a new data object
  // createFood(food) {
  //   const body = JSON.stringify(food);
  //   return this.http.post(this.foodUrl, body, httpOptions);
  // }
  // // send a PUT request to the API to update a data object
  // updateFood(food) {
  //   const updateUrl = this.baseUrl + '/Angular/Client/';
  //   const body = JSON.stringify(food);
  //   return this.http.put(updateUrl + food.id, body, httpOptions);
  // }
  // // send a DELETE request to the API to delete a data object
  // deleteFood(food) {
  //   return this.http.delete(this.foodUrl + food.id);
  // }

}
