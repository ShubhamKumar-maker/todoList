import { Injectable } from '@angular/core';
import { TodoModle } from './modle/todo-modle';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
TODOLIST:Array<TodoModle>=[];
toUpdate!:TodoModle;


  constructor() { }

  saveToList(task:TodoModle):void{
     this.TODOLIST.push(task);
  }

  updateList(updatedTask:TodoModle):boolean{
    let index=this.TODOLIST.indexOf(this.toUpdate);
    this.TODOLIST[index]=updatedTask;
      return true;
  }

  deletetodo(dtask:TodoModle):boolean{
    let index=this.TODOLIST.indexOf(dtask);
    this.TODOLIST.splice(index,1);
    return true;
  }
}
