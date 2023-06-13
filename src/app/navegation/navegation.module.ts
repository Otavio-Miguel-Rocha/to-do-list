import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavegationComponent } from "./navegation.component";


@NgModule({
    declarations: [NavegationComponent],
    imports: [CommonModule],
    exports: [NavegationComponent],
})
export class NavegationModule{}