import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav.component";
@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
