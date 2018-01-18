import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WriterComponent } from './writer/writer.component';
import { TestData } from './testwebapi/test-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WriterService } from './writer/writer.service';


@NgModule({
  declarations: [
    AppComponent,
    WriterComponent
  ],
  imports: [
    InMemoryWebApiModule.forRoot(TestData),
    BrowserModule,
    HttpClientModule
  ],
  providers: [WriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
