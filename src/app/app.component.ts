import { Component, OnInit } from "@angular/core";

interface Tarefa {
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
    }
  }
  tarefas: Tarefa[] = [];

  tarefa: Tarefa = {
    titulo: "",
    descricao: "",
    categoria: "",
  };

  cadastrarUsuario(): void {
    const tarefa: Tarefa = {
      titulo: this.tarefa.titulo,
      descricao: this.tarefa.descricao,
      categoria: this.tarefa.categoria,
    };

    this.tarefas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    this.tarefa.titulo = "";
    this.tarefa.descricao = "";
  }
  remover(codigo: number): void {
    this.tarefas.splice(codigo, 1);
  }
}
