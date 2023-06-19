import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalInputDataComponent } from "../modal-input-data/modal-input-data.component";
import { TaskModule } from "./task/task.module";
import { TasksComponent } from "./tasks.component";

@NgModule({
  imports: [CommonModule, FormsModule, TaskModule],
  declarations: [TasksComponent, ModalInputDataComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
