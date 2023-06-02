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

  testeDALE(event):void{
    console.log(event);
  }

  dragEnd(tarefa:Tarefa):void{
    const categoria:Categoria = JSON.parse(localStorage.getItem("CategoriaDrag"));
    if( categoria != null ){
      tarefa.categoria = categoria;
      localStorage.setItem("Tarefas",JSON.stringify(this.tarefaRegistradas));
    }
  }

  atualizarCategoria(categoria:Categoria):void{
    //demonstra onde é possível dropar
    event.preventDefault();
    localStorage.setItem("CategoriaDrag",JSON.stringify(categoria));
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
