import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { TodoModle } from '../modle/todo-modle';
import { TodoServiceService } from '../todo-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss']
})
export class AddTodosComponent implements OnInit {
  todoForm!:FormGroup;
  task!:TodoModle;


  constructor(private service:TodoServiceService,private route:Router) { }

  ngOnInit(): void {
    this.todoForm=new FormGroup({
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      phone:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      address:new FormControl("",Validators.required)
    })
  }

  onSubmit():void{
    this.task=this.todoForm.value;
    console.log(this.task);
   this.service.saveToList(this.task);
    console.log(this.service.TODOLIST);
    this.route.navigate(['/Home']);
  }

}
