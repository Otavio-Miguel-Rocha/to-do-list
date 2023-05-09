import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CategoriasComponent } from "./categorias.component";


@NgModule({
    declarations:[CommonModule, FormsModule],
    imports:[CategoriasComponent],
    exports:[CategoriasComponent],
})
export class CategoriasModule{}