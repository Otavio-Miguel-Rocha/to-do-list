import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "src/register/register.component";
import { RegisterModule } from "src/register/register.module";
import { TasksComponent } from "./tasks.component";

@NgModule({
  imports: [CommonModule, FormsModule, RegisterComponent],
  declarations: [TasksComponent, RegisterModule],
  exports: [TasksComponent],
})
export class TasksModule {}
