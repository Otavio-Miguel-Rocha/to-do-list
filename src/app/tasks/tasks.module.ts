import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TaskModule } from "./task/task.module";
import { TasksComponent } from "./tasks.component";

@NgModule({
  imports: [CommonModule, FormsModule, TaskModule],
  declarations: [TasksComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
