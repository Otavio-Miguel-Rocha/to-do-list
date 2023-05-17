import { Component, EventEmitter, OnInit, Output } from "@angular/core";

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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Output()
  registrarTarefa = new EventEmitter();

  categoria: Categoria;
  tarefas: Tarefa[];
  ngOnInit(): void {
    //tarefas
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
    } else{
      this.tarefas = [];
    }
    //categorias
    this.categoria = JSON.parse(localStorage.getItem("CategoriaCadastro"));
    console.log(this.categoria);
    console.log(this.tarefas);

  }

  tarefa: Tarefa = {
    titulo: "",
    descricao: "",
    categoria: {
      nome: "",
      cor: "",
    },
  };

  register(): void {
    const tarefa: Tarefa = {
      titulo: this.tarefa.titulo,
      descricao: this.tarefa.descricao,
      categoria: {
        nome: this.categoria.nome,
        cor: this.categoria.cor,
      },
    };
    this.tarefas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    this.tarefa.titulo = "";
    this.tarefa.descricao = "";
  }
  getTarefas(categoria: Categoria): any[] {
    return this.tarefas.filter((tarefa) => {
      return tarefa.categoria.nome === categoria.nome;
    });
  }
  updateCurrentCategory(): void{
    localStorage.removeItem("CategoriaCadastro");
  }
}
