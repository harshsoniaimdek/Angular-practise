import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World';
  userData: any={};
  count = 0
  counter() {
    this.count++
  }
  getData(data:NgForm) {
    console.warn(data)
    this.userData=data
  }
}
