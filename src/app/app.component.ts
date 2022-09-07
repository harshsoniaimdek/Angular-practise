import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World';
  list : any[]=[];
  addTask(item:string) {
    this.list.push({id:this.list.length,name:item})
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}
