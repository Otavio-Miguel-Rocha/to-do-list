import { Component, OnInit } from "@angular/core";

interface Tarefa {
  codigoTarefa: number;
  nome: string;
  categoria: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(localStorage.getItem("Tarefas"));
  }
  tarefas: Tarefa[] = [];
  codigo: number = 0;

  tarefa: Tarefa = {
    codigoTarefa: 0,
    nome: "",
    categoria: "",
  };

  cadastrarUsuario(): void {
    const tarefa: Tarefa = {
      codigoTarefa: this.codigo++,
      nome: this.tarefa.nome,
      categoria: this.tarefa.categoria,
    };

    this.tarefas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    this.tarefa.nome = "";
  }
  remover(codigo: number): void {
    this.tarefas.splice(codigo, 1);
  }
}
