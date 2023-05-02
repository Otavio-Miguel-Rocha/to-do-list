import { Component, OnInit } from "@angular/core";

interface Tarefa {
  codigo: number;
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

  cadastrarUsuario(): void {
    const tarefa: Tarefa = {
      codigo: this.contadorCodigos,
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
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  mudarCategoria(categoria: string, codigo: number): void {
    this.tarefas.forEach((tarefa) => {
      if (tarefa.codigo == codigo) {
        this.tarefa.categoria = categoria;
      }
    });
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
}
