import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class RegisterModule {}
