import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get authorized() {
    return localStorage.getItem("login");
  }

  public logOut() {
    localStorage.removeItem("login");
  }
}
