import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'models/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todos: Todo[] =  [
    new Todo(Guid.create(), 'Wash Car', false),   //default olarak verdiğimiz todo values değerleri
    new Todo(Guid.create(), 'Buy Groceries', false), 
    ]

  onSubmit(form: NgForm){
    let todo=new Todo(Guid.create(),form.value.title,false);
    this.todos.push(todo);
    form.resetForm();


  }

  onComplete(id:Guid){ //tamamlandı alanı için gerekli kodlarımız
    let todo= this.todos.filter(x=>x.id===id)[0];
    todo.isComplete=true;
    

  }


  onDelete(id:Guid){  //silmek içik gerekli komutlarımız
    let todo= this.todos.filter(x=>x.id === id)[0];
    let index=this.todos.indexOf(todo,0);
    if(index > -1){
      this.todos.splice(index,1);
    }

  }
}


