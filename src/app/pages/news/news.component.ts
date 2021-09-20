import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public articles: any
  constructor(private http: HttpClient){}
  ngOnInit() {
          
    this.http.get('https://newsapi.org/v2/everything?q=apple&from=2021-09-15&to=2021-09-15&sortBy=popularity&apiKey=8662b9592b2a4941b3e7353141ee9aae')
    .subscribe((data:any) => {
      console.log(data);
      this.articles = data.articles.map((item: any) => {
        item.publishedAt = new Date(item.publishedAt)
        return item
      });
    });
  }
}


