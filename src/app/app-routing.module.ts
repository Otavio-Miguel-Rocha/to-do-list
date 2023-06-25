import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
// import { AuthGuardService } from "src/services/auth-guard.service";
import { TarefasComponent } from "./tarefas/tarefas.component";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";

const routes: Route[] = [
    {
      path: "Menu-Inicial",
      component: TelaInicialComponent,
    }, 
    {
      path: "Tarefas",
      component: TarefasComponent,
      // canActivate: [AuthGuardService],
    } ,
    {
      path: "",
      pathMatch: "full",
      redirectTo: "Tarefas",
    }, //rota padrão
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRountingModule {}