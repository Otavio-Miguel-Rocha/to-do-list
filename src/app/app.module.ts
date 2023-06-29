import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserRepository } from "src/repositories/user.repository";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { AppRountingModule } from "./app-routing.module";
import { TarefasModule } from "./tarefas/tarefas.module";
import { HttpClientModule } from "@angular/common/http";
// import { AuthGuardService } from 'src/services/auth-guard.service';
import { TesteService } from "src/services/teste.service";

@NgModule({
  declarations: [AppComponent, TelaInicialComponent, NavegacaoComponent],
  imports: [BrowserModule, AppRountingModule, TarefasModule, HttpClientModule],
  providers: [
    UserRepository,
    // AuthGuardService,
    TesteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
