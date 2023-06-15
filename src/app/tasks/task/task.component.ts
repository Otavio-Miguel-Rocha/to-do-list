import { Component, Input } from "@angular/core";

interface Tarefa {
    titulo: string,
    campo: Campos,
}
interface Campos {
  nome: string;
  cor: string;
}

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{
    @Input()
    tarefasRegistradas: Tarefa[];
    @Input()
    tarefa: Tarefa;

    @Input()
    campo: Campos;

    @Input()
    campos: Campos[];

    salvarNovoTitulo(novoTitulo : string):void{
        this.tarefa.titulo = novoTitulo;
        this.setTarefaLocalStorage();
    }

    remover(objeto: Tarefa): void {
        this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(objeto), 1);
        this.setTarefaLocalStorage();
    }
    setTarefaLocalStorage():void{
        localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
    }
    
}