import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavComponent } from "src/nav/nav.component";
import { CategoriasComponent } from "src/categorias/categorias.component";
import { AppRountingModule } from "./app-routing.module";
import { TasksComponent } from "src/tasks/tasks.component";
import { RegisterComponent } from "src/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoriasComponent,
    TasksComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRountingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
