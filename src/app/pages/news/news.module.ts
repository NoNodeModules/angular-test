import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { HttpClientModule }   from '@angular/common/http';
@NgModule({
  declarations: [NewsComponent],
  imports: [NewsRoutingModule, HttpClientModule, CommonModule],
})
export class NewsModule { }
