import { Component, Input } from "@angular/core";

interface Tarefa {
    titulo: string,
    descricao: string,
    propriedades: Propriedades;
}
interface Propriedades {
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
    propriedade: Propriedades;

    @Input()
    propriedades: Propriedades[];

    remover(objeto: Tarefa): void {
        this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(objeto), 1);
        this.setTarefaLocalStorage();
    }
    setTarefaLocalStorage():void{
        localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
    }
    
}