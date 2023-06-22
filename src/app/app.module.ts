import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRepository } from 'src/repositories/user.repository';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AppRountingModule } from './app-routing.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    NavegacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    TarefasModule
  ],
  providers: [
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
