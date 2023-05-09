import { Component, OnInit } from "@angular/core";

interface Tarefa {
  codigo: number;
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    console.log(lista);
    if (lista != null) {
      this.tarefas = lista;
    }
  }
  contadorCodigos: number = 0;
  tarefas: Tarefa[] = [];

  tarefa: Tarefa = {
    codigo: 0,
    titulo: "",
    descricao: "",
    categoria: "",
  };

  register(): void {
    if (this.tarefa.categoria == "") {
      alert("A categoria deve ser preenchida");
    } else {
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
      location.reload();
    }
  }
}
