import { Component, EventEmitter, OnInit, Output } from "@angular/core";

interface Tarefa {
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

  @Output()
  registrarTarefa = new EventEmitter();
  tarefas: Tarefa[] = [];
  categorias: string[];
  ngOnInit(): void {
    //tarefas
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
    }
    //categorias
    this.categorias = JSON.parse(localStorage.getItem("Categorias"));
    console.log(this.categorias);
  }

  tarefa: Tarefa = {
    titulo: "",
    descricao: "",
    categoria: "",
  };

  register(): void {
    if (this.tarefa.categoria == "") {
      alert("A categoria deve ser preenchida");
    } else {
      const tarefa: Tarefa = {
        titulo: this.tarefa.titulo,
        descricao: this.tarefa.descricao,
        categoria: this.tarefa.categoria,
      };
      console.log(tarefa);
      this.tarefas.push(tarefa);
      localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
      this.registrarTarefa.emit(this.tarefa);
      location.reload();
      this.tarefa.titulo = "";
      this.tarefa.descricao = "";
    }
  }
}
