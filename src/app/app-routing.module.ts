import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateTodosComponent } from './update-todos/update-todos.component';
import { AddTodosComponent } from './add-todos/add-todos.component';

const routes: Routes = [{path:"", redirectTo:'Home', pathMatch:'full'},
{ path: 'Home', component: HomeComponent },
{ path: 'Update', component: UpdateTodosComponent },
{path:'Add',component:AddTodosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
