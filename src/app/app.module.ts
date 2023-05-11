import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavComponent } from "src/nav/nav.component";
import { RegisterComponent } from "src/register/register.component";
import { TasksComponent } from "src/tasks/tasks.component";
import { CategoriasComponent } from "src/categorias/categorias.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    TasksComponent,
    CategoriasComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
