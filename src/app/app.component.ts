import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World';
  data = "Code of Angular tutorials"
  count = 0
  counter() {
    this.count++
  }
}
