import { Component, Input } from "@angular/core";

interface Tarefa {
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent{

  @Input()
  tarefaRegistradas:Tarefa[];

  @Input()
  categoriasRegistradas:string[];

  getTarefas(categoria:string): any[]{
    return this.tarefaRegistradas.filter( (tarefa) => {
      return tarefa.categoria === categoria;
    })
  }
  remover(objeto: Tarefa): void {
    this.tarefaRegistradas.splice(this.tarefaRegistradas.indexOf(objeto), 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
}
