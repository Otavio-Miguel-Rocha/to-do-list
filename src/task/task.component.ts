import { Component, Input } from "@angular/core";

interface Tarefa {
    titulo: string,
    descricao: string,
    categoria: Categoria,
}
interface Categoria {
    nome: string,
    cor: string,
}

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{
    @Input()
    tarefas: Tarefa[];
    @Input()
    tarefa: Tarefa;

    @Input()
    categoria: Categoria;

    @Input()
    categorias: Categoria[];

    remover(objeto: Tarefa): void {
        this.tarefas.splice(this.tarefas.indexOf(objeto), 1);
        this.saveLocalStorage();
    }
    saveLocalStorage(): void {
      localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    }
    
}