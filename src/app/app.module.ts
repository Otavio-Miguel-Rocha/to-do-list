import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserRepository } from "src/repositories/user.repository";
import { TelaLoginComponent } from "./tela-login/tela-login.component";
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { AppRountingModule } from "./app-routing.module";
import { TarefasModule } from "./tarefas/tarefas.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuardService } from 'src/services/auth-guard.service';
import { FormsModule } from "@angular/forms";
import { TelaRegisterComponent } from './tela-register/tela-register.component';
import { UserService } from "src/services/user.service";

@NgModule({
  declarations: [AppComponent, TelaLoginComponent, NavegacaoComponent, TelaRegisterComponent],
  imports: [BrowserModule, AppRountingModule, TarefasModule, FormsModule, HttpClientModule],
  providers: [
    UserRepository,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
