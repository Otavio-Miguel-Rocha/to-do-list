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
  categorias: string[];
  ngOnInit(): void {
    //lista Tarefas
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    console.log(lista);
    if (lista != null) {
      this.tarefas = lista;
    }

    //lista Categorias
    this.categorias = JSON.parse(localStorage.getItem("Categorias"));
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
}
