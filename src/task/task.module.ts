import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./task.component";


@NgModule({
    declarations: [ TaskComponent],
    imports: [ CommonModule, FormsModule],
    exports: [ TaskComponent],
})
export class TaskModule{}