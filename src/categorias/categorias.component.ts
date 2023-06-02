import { Component, OnInit } from "@angular/core";

interface Categoria {
  nome: string;
  cor: string;
}

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"],
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  nenhumaCategoria: boolean = false;
  ngOnInit() {
    let lista: Categoria[];
    lista = JSON.parse(localStorage.getItem("Categorias"));
    if (lista != null && lista.length != 0) {
      this.categorias = lista;
      this.nenhumaCategoria = false;
    } else {
      this.nenhumaCategoria =  true;
    }
  }


  categoria: Categoria = {
    nome: "",
    cor: "",
  };

  cadastrarCategoria(): void {
    if (this.categoria.cor == "") {
      this.categoria.cor = "#000000";
    }
    const categoria: Categoria = {
      nome: this.categoria.nome,
      cor: this.categoria.cor,
    };
    let verificar: boolean = false;

    if(this.categorias != null){
      //metodo de array retorna o objeto e quebra o "forEach"
      if(this.categorias.find( (categoriaVerificar) => categoriaVerificar.nome == this.categoria.nome) != null){
        verificar = true;
      }
    }
    //metodo de array retorna true e false
    
    if (verificar) {
      alert("As categorias não podem ter nomes iguais!");
    } else {
      this.nenhumaCategoria = false;
      this.categorias.push(categoria);
      this.setLocalStorage();
      this.categoria.nome = "";
    }
  }
  removerDaLista(categoria: Categoria): void {
    let tarefas = JSON.parse(localStorage.getItem('Tarefas'));
    if( tarefas != null && tarefas.length != 0){
      tarefas.forEach ( (tarefa) => {
        if( tarefa.categoria.nome == categoria.nome){
          tarefas.splice(tarefas.indexOf(tarefa),1);
        }
      } )
      localStorage.setItem("Tarefas",JSON.stringify(tarefas));
    }
    this.categorias.splice(this.categorias.indexOf(categoria), 1);
    if( this.categorias.length == 0 ){
      this.nenhumaCategoria = true;
    }
    this.setLocalStorage();
  }

  setLocalStorage(): void {
    localStorage.setItem("Categorias", JSON.stringify(this.categorias));
  }
}
