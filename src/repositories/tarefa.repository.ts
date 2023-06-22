import { Injectable } from "@angular/core";
import { Tarefa } from "src/models/tarefa/tarefa";

@Injectable()
export class TarefaRepository {
    getTarefas(): Tarefa[] {
        return tarefas;
    }
}