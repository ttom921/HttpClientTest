import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo/demo.service';
import { Food } from './models/food';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from './models/demoentity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public foods: Food[] = [];
  public food_name;
  public books: Book[] = [];
  public model: Book = new Book(-1, '', '');
  constructor(private _demoService: DemoService) {

  }

  ngOnInit() {

    this.getFoods();
    this.getBooks();
    // console.log(this.foods);
    console.log('app ngOnInit');
  }
  getBooksAndFoods() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.foods = data[0] as Food[];
        this.books = data[1] as Book[];
      },
      err => {
        this.ErrorHandle(err);
      },
      () => { console.log('done get food and books'); }
    );
  }
  // --------------
  getFoods() {
    this._demoService.getFoods().subscribe(
      data => { this.foods = data; },
      err => { this.ErrorHandle(err); },
      () => { console.log('done loading foods'); }
    );
  }
  // 加入食物
  createFood(name) {
    let food = { name: name }; // {name: name};
    this._demoService.createFood(food).subscribe(
      data => {
        // refresh the list
        this.getFoods();
        return true;
      },
      err => {
        this.ErrorHandle(err);
      },
      () => { console.log('done create food'); }
    );

  }
  createOFood(name) {
    let book = new Book(-1, '2222', '33333');
    this._demoService.createOFood(book).subscribe(
      data => {
        // refresh the list
        this.getFoods();
        return true;
      },
      err => {
        this.ErrorHandle(err);
      },
      () => { console.log('done create food'); }
    );
  }
  // 更新
  updateFood(food) {
    this._demoService.updateFood(food).subscribe(
      data => {
        // refresh the list
        this.getFoods();
        return true;
      },
      err => {
        // this.getFoods();
        this.ErrorHandle(err);
      },
      () => { console.log('done updateFood food'); }
    );
  }
  // 刪除
  deleteFood(food) {
    if (confirm('Are you sure you want to delete ' + food.name + '?')) {
      this._demoService.deleteFood(food).subscribe(
        data => {
          // refresh the list
          this.getFoods();
          return true;
        },
        err => {
          // this.getFoods();
          this.ErrorHandle(err);
        },
        () => { console.log('done delete food'); }
      );
    }
  }

  ErrorHandle(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      console.log('An error occurred:', err.error.message);
    } else {
      // Backend returns unsuccessful response codes such as 404, 500 etc.	
      console.log('Backend returned status code: ', err.status, ' statusText=', err.statusText, ' message=', err.message);
      console.log('Response body:', err.error);
    }
  }

  //
  getBooks() {
    this._demoService.getBooks().subscribe(
      data => {
        this.books = data;
      },
      err => {
        this.ErrorHandle(err);
      },
      () => { console.log('done loading books'); }
    );
  }

  createbook() {
    console.log(this.model);
    this._demoService.createBook(this.model).subscribe(
      data => {
        // refresh the list
        this.getBooks();
        return true;
      },
      err => {
        this.ErrorHandle(err);
      },
      () => { console.log('done create book'); }
    );
  }
  updateBook(book) {
    this._demoService.updateBook(book).subscribe(
      data => {
        // refresh the list
        this.getBooks();
        return true;
      },
      err => {
        // this.getFoods();
        this.ErrorHandle(err);
      },
      () => { console.log('done updateFood book'); }
    );
  }
  deleteBook(book) {
    if (confirm('Are you sure you want to delete ' + book.title + '?')) {
      this._demoService.deleteBook(book).subscribe(
        data => {
          // refresh the list
          this.getBooks();
          return true;
        },
        err => {
          // this.getFoods();
          this.ErrorHandle(err);
        },
        () => { console.log('done delete book'); }
      );
    }
  }
}
