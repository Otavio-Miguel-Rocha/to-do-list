import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
// import { AuthGuardService } from "src/services/auth-guard.service";
import { TarefasComponent } from "./tarefas/tarefas.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";
import { TelaRegisterComponent } from "./tela-register/tela-register.component";

const routes: Route[] = [
  {
    path: "Login",
    component: TelaLoginComponent,
  },
  {
    path: "Cadastro",
    component: TelaRegisterComponent,
  },
  {
    path: "Tarefas",
    component: TarefasComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "Login",
  }, //rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
