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

  tarefaRegistradas: Tarefa[];
  categoriasRegistradas: Categoria[];
  nenhumaCategoria: boolean = false;
  indiceDrag: number = 0;
  tarefaDrag: Tarefa = null;
  categoriaDrop: string = "";

  ngOnInit(): void {
    let listaTarefas: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (listaTarefas != null) {
      this.tarefaRegistradas = listaTarefas;
    } else {
      this.tarefaRegistradas = [];
    }
    let listaCategorias: Categoria[] = JSON.parse(
      localStorage.getItem("Categorias")
    );
    if (listaCategorias != null && listaCategorias.length != 0) {
      this.categoriasRegistradas = listaCategorias;
      this.nenhumaCategoria = false;
    } else {
      this.nenhumaCategoria = true;
    }
  }


  //DRAG AND DROP
  atualizarCategoria(categoria: Categoria, event: Event): void {
    event.preventDefault();
    this.categoriaDrop = categoria.nome;
  }

  drag(tarefa: Tarefa): void {
    this.tarefaDrag = tarefa;
  }

  getIndice(index: number, event: Event): void {
    event.preventDefault();
    this.indiceDrag = index;
  }

  drop(event: Event) {
    event.preventDefault();
    this.tarefaDrag.categoria.nome = this.categoriaDrop;

    this.atualizarPosicaoArray();
  }

  atualizarPosicaoArray(): void {
    this.tarefaRegistradas.splice(this.tarefaRegistradas.indexOf(this.tarefaDrag), 1);
    this.tarefaRegistradas.splice(this.indiceDrag, 0, this.tarefaDrag);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }

  getTarefas(categoria: Categoria): any[] {
    return this.tarefaRegistradas.filter((tarefa) => {
      return tarefa.categoria.nome == categoria.nome;
    });
  }
  remover(objeto: Tarefa): void {
    this.tarefaRegistradas.splice(this.tarefaRegistradas.indexOf(objeto), 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
  mudarCategoria(): void {
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefaRegistradas));
  }
  sendList(categoria: string): void {
    localStorage.setItem("CategoriaCadastro", JSON.stringify(categoria));
  }
  //passar dados entre rotas
}
