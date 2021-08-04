import { Component, OnInit } from '@angular/core';
import { TodoModle } from '../modle/todo-modle';
import { TodoServiceService } from '../todo-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tasks:Array<TodoModle>=[];




  constructor(private service:TodoServiceService,private route: Router) { }

  ngOnInit(): void {
    this.tasks=this.service.TODOLIST;
  }

  update(task:TodoModle):void{
    this.service.toUpdate=task;
    this.route.navigate(['/Update']);
  }

  delete(task:TodoModle):void{
    this.service.deletetodo(task);
  }

}
