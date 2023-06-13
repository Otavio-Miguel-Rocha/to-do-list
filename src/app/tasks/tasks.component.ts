import { Component, OnInit } from "@angular/core";

interface Tarefa {
  titulo: string;
  propriedades: Propriedades;
}
interface Propriedades {
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
    //PROPRIEDADES
    let localStorageTestProperties = JSON.parse(localStorage.getItem("Propriedades"));
    console.log(localStorageTestProperties);
    if (localStorageTestProperties != null && localStorageTestProperties.length != 0) {
      this.propriedades = localStorageTestProperties;
    } else {
      const propriedadeVazia:Propriedades = {
        nome: "Sem Classificação",
        cor: "#FFFFFF",
      };
      this.propriedades.push(propriedadeVazia);
      this.propriedades.push(propriedadeVazia);
      this.propriedades.push(propriedadeVazia);
      this.propriedades.push(propriedadeVazia);
      this.propriedades.push(propriedadeVazia);

      localStorage.setItem("Propriedades", JSON.stringify(this.propriedades));
    }
  }
  personalizacoes: PersonalizacaoPagina = {
    titulo: "",
    descricao:"",
  };

  tarefasRegistradas: Tarefa[] = [];
  propriedades: Propriedades[] = [];

  //DRAG AND DROP
  indiceDrag: number = 0;
  tarefaDrag: Tarefa = null;
  propriedadeDrop: string = "";

  salvarTituloKanban(novoTitulo: string):void{
    this.personalizacoes.titulo = novoTitulo;
    localStorage.setItem('personalizacoes', JSON.stringify(this.personalizacoes));
  }
  salvarDescricaoKanban(novaDescricao: string):void{
    this.personalizacoes.descricao = novaDescricao;
    localStorage.setItem('personalizacoes', JSON.stringify(this.personalizacoes));
  }
  salvarNomePropriedade(propriedade:Propriedades,novoNome: string):void{
    propriedade.nome = novoNome;
    localStorage.setItem('Propriedades', JSON.stringify(this.propriedades));
  }

  openModalNewTask(propriedade:Propriedades):void{
    const tarefa: Tarefa = {
      titulo: "Insira o nome",
      propriedades: propriedade
    };
    this.tarefasRegistradas.push(tarefa);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
  }
  openModalNewSection():void{
    
  }

  //DRAG AND DROP
  atualizarPropriedade(propriedade: Propriedades, event: Event): void {
    event.preventDefault();
    this.propriedadeDrop = propriedade.nome;
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
    this.tarefaDrag.propriedades.nome = this.propriedadeDrop;

    this.atualizarPosicaoArray();
  }

  atualizarPosicaoArray(): void {
    this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(this.tarefaDrag), 1);
    this.tarefasRegistradas.splice(this.indiceDrag, 0, this.tarefaDrag);
    this.setTarefaLocalStorage();
  }

  getTarefas(propriedade: Propriedades): any[] {
    return this.tarefasRegistradas.filter((tarefa) => {
      return tarefa.propriedades.nome == propriedade.nome;
    });
  }
  remover(objeto: Tarefa): void {
    this.tarefasRegistradas.splice(this.tarefasRegistradas.indexOf(objeto), 1);
    this.setTarefaLocalStorage();
  }

  mudarCategoria(): void {
    this.setTarefaLocalStorage();
  }
  setTarefaLocalStorage():void{
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefasRegistradas));
  }
}
