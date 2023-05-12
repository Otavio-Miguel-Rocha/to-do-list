import { Component, Input, OnInit } from "@angular/core";

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
export class TasksComponent implements OnInit {
  @Input()
  tarefaRegister:Tarefa;

  tarefas: Tarefa[] = [];
  categorias: string[];
  ngOnInit(): void {
    //lista Tarefas
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
    }

    //lista Categorias
    this.categorias = JSON.parse(localStorage.getItem("Categorias"));
  }

  tarefa: Tarefa = {
    titulo: "",
    descricao: "",
    categoria: "",
  };

  remover(objeto: Tarefa): void {
    this.tarefas.splice(this.tarefas.indexOf(objeto), 1);
    console.log(this.tarefas);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
}
