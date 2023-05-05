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
    if(this.tarefa.categoria == ""){
      alert('A categoria deve ser preenchida');
    }
    else{
      const tarefa: Tarefa = {
        codigo: this.contadorCodigos++,
        titulo: this.tarefa.titulo,
        descricao: this.tarefa.descricao,
        categoria: this.tarefa.categoria,
      };
      this.tarefas.push(tarefa);
      localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
      this.tarefa.titulo = "";
      this.tarefa.descricao = "";
    }
  }
  remover(objeto:Tarefa): void {
    this.tarefas.splice(this.tarefas.indexOf(objeto),1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
}
