import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "src/register/register.component";
import { TasksComponent } from "src/tasks/tasks.component";
import { TasksRegisterComponent } from "./tasks-register.component";


@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[TasksRegisterComponent, RegisterComponent, TasksComponent],
    exports:[TasksRegisterComponent]
})
export class TasksRegisterModule{}