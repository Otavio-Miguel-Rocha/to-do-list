import { Component, OnInit } from "@angular/core";

interface Tarefa {
  titulo: string;
  descricao: string;
  categoria: Categoria;
}
interface Categoria {
  nome: string;
  cor: string;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  ngOnInit(): void {
    let listaTarefas: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (listaTarefas != null) {
      this.tarefaRegistradas = listaTarefas;
    }
    let listaCategorias: Categoria[] = JSON.parse(
      localStorage.getItem("Categorias")
    );
    if (listaCategorias != null) {
      this.categoriasRegistradas = listaCategorias;
    }
  }
  tarefaRegistradas: Tarefa[];

  categoriasRegistradas: Categoria[];

  registroTarefa: boolean = false;
  getTarefas(categoria: string): any[] {
    return this.tarefaRegistradas.filter((tarefa) => {
      return tarefa.categoria.nome == categoria;
    });
  }
  remover(objeto: Tarefa): void {
    this.tarefaRegistradas.splice(this.tarefaRegistradas.indexOf(objeto), 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
  openRegister(): void {
    if (this.registroTarefa) {
      this.registroTarefa = false;
    } else {
      this.registroTarefa = true;
    }
  }
}
