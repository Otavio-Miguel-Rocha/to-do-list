import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

const routes: Route[] = [
  {
    path: "tarefas",
    component: TasksComponent,
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
