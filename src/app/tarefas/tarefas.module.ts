import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefasComponent } from './tarefas.component';
import { ModalCadastrarDadosComponent } from '../modal-cadastrar-dados/modal-cadastrar-dados.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TarefasComponent,
    ModalCadastrarDadosComponent
  ]
})
export class TarefasModule { }
