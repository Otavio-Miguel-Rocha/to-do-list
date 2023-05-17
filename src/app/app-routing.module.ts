import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriasComponent } from "src/categorias/categorias.component";
import { RegisterComponent } from "src/register/register.component";
import { TasksComponent } from "src/tasks/tasks.component";

const routes: Route[] = [
  {
    path: "categoria",
    component: CategoriasComponent,
  },
  {
    path: "tarefas",
    component: TasksComponent,
  },
  {
    path: "registrar-tarefa",
    component: RegisterComponent,
  },
  
  {
    path: "",
    pathMatch: "full",
    redirectTo: "tarefas",
  }, //default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
