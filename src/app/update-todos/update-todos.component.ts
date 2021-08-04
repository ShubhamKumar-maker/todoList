import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodoModle } from '../modle/todo-modle';

@Component({
  selector: 'app-update-todos',
  templateUrl: './update-todos.component.html',
  styleUrls: ['./update-todos.component.scss']
})
export class UpdateTodosComponent implements OnInit {
  todoForm!:FormGroup;
  valueupdate!:TodoModle;
  
  constructor(private service:TodoServiceService,private route: Router) { }

  ngOnInit(): void {
    this.todoForm=new FormGroup({
      firstName:new FormControl(this.service.toUpdate.firstName),
      lastName:new FormControl(this.service.toUpdate.lastName),
      phone:new FormControl(this.service.toUpdate.phone,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      address:new FormControl(this.service.toUpdate.address,Validators.required)
    })
  }

  onSubmit():void{
    this.valueupdate=this.todoForm.value;
    let result=this.service.updateList(this.valueupdate);
    if(result)
    {
      this.route.navigate(['/Home']);
    }
    else{
        console.log("error occurs");
        alert("not able to update");
    }
  }

}
