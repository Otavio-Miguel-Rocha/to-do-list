import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavModule } from "src/nav/nav.module";
import { RegisterModule } from "src/register/register.module";
import { TasksModule } from "src/tasks/tasks.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NavModule, RegisterModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
