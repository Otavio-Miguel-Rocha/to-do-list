import { Component, OnInit } from "@angular/core";

interface Tarefa {
  codigo: number;
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
  tarefas: Tarefa[] = [];
  contadorCodigos: number = 0;

  ngOnInit(): void {
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
    }
  }

  tarefa: Tarefa = {
    codigo: 0,
    titulo: "",
    descricao: "",
    categoria: "",
  };

  remover(objeto: Tarefa): void {
    this.tarefas.splice(this.tarefas.indexOf(objeto), 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  registerTask(): void {
    console.log("tasks");
  }
}
