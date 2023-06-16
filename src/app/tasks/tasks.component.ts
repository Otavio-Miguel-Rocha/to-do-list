import { Component, OnInit } from "@angular/core";

interface Tarefa {
  titulo: string;
  campos: Campos;
}
interface Campos {
  nome: string;
  cor: string;
}
interface PersonalizacaoPagina {
  titulo: string;
  descricao: string;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  ngOnInit(): void {
    //TÍTULOS E DESCRIÇÕES
    let personalizacoesInit: PersonalizacaoPagina = JSON.parse(localStorage.getItem("personalizacoes"));
    if( personalizacoesInit != null){
        this.personalizacoes.titulo = personalizacoesInit.titulo;
        this.personalizacoes.descricao = personalizacoesInit.descricao;
    } else{
      this.personalizacoes.titulo = "Título";
      this.personalizacoes.descricao = "Descrição";
    }

    //TAREFAS
    let listaTarefas: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (listaTarefas != null) {
      this.tarefasRegistradas = listaTarefas;
    }
    //CAMPOS
    let localStorageTestarCampos = JSON.parse(localStorage.getItem("Campos"));
    console.log(localStorageTestarCampos);
    if (localStorageTestarCampos != null && localStorageTestarCampos.length != 0) {
      this.campos = localStorageTestarCampos;
    } else {
      const campoVazio:Campos = {
        nome: "Sem Classificação",
        cor: "#FFFFFF",
      };
      this.campos.push(campoVazio);

      localStorage.setItem("Campos", JSON.stringify(this.campos));
    }
  }
  personalizacoes: PersonalizacaoPagina = {
    titulo: "",
    descricao:"",
  };

  tarefasRegistradas: Tarefa[] = [];
  campos: Campos[] = [];



  salvarTituloKanban(novoTitulo: string):void{
    this.personalizacoes.titulo = novoTitulo;
    localStorage.setItem('personalizacoes', JSON.stringify(this.personalizacoes));
  }
  salvarDescricaoKanban(novaDescricao: string):void{
    this.personalizacoes.descricao = novaDescricao;
    localStorage.setItem('personalizacoes', JSON.stringify(this.personalizacoes));
  }
  salvarNomeCampo(campo:Campos,novoNome: string):void{
    campo.nome = novoNome;
    localStorage.setItem('Campos', JSON.stringify(this.campos));
  }
  //
  modalProperties:boolean = false;
  openModalProperties():void{
    if(this.modalProperties){
      this.modalProperties = false;
    }
    else{
      this.modalProperties = true;
    }
  }
  newTask(campo:Campos):void{
    const tarefa: Tarefa = {
      titulo: "Insira o nome",
      campos: campo,
    };
    this.tarefasRegistradas.push(tarefa);
    console.log(this.tarefasRegistradas);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
  }

  //DRAG AND DROP
  indiceDrag: number = 0;
  tarefaDrag: Tarefa = null;
  campoDrop: string = "";
  //DRAG AND DROP
  atualizarCampo(campo:Campos, event: Event): void {
    event.preventDefault();
    this.campoDrop = campo.nome;
    console.log(this.campoDrop);
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
    const newCampo: Campos = {
      nome: this.campoDrop,
      cor: this.tarefaDrag.campos.cor
    };
    this.tarefaDrag.campos = newCampo;

    this.atualizarPosicaoArray();
  }

  atualizarPosicaoArray(): void {
    this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(this.tarefaDrag), 1);
    this.tarefasRegistradas.splice(this.indiceDrag, 0, this.tarefaDrag);
    this.setTarefaLocalStorage();
  }

  getTarefas(campo:Campos): any[] {
    return this.tarefasRegistradas.filter((tarefa) => {
      return tarefa.campos.nome == campo.nome;
    });
  }
  remover(objeto: Tarefa): void {
    this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(objeto), 1);
    this.setTarefaLocalStorage();
  }

  mudarCategoria(): void {
    this.setTarefaLocalStorage();
  }

  novoCampo():void{
    const novoCampo:Campos = {
      nome: "Insira o Título",
      cor: "",
    }
    this.campos.push(novoCampo);
    localStorage.setItem("Campos",JSON.stringify(this.campos));
  }


  setTarefaLocalStorage():void{
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
  }
}
