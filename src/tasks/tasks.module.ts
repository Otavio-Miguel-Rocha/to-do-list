import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TasksComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
