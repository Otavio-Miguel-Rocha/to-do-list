import { Component, OnInit } from "@angular/core";
import { Console } from "console";

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
  to_dos: Tarefa[] = [];
  doings: Tarefa[] = [];
  dones: Tarefa[] = [];
  contadorCodigos: number = 0;

  ngOnInit(): void {
    const lista: Tarefa[] = JSON.parse(localStorage.getItem("Tarefas"));
    if (lista != null) {
      this.tarefas = lista;
      this.to_dos = JSON.parse(localStorage.getItem("TarefasTodo"));
      this.doings = JSON.parse(localStorage.getItem("TarefasDoing"));
      this.dones = JSON.parse(localStorage.getItem("TarefasDone"));
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

    if(this.tarefa.categoria == "To-Do"){
      this.to_dos.push(tarefa);
      
    } else if(this.tarefa.categoria == "Doing"){
      this.doings.push(tarefa);

    } else if(this.tarefa.categoria == "Done"){
      this.dones.push(tarefa);
    }

    localStorage.setItem("TarefasTodo", JSON.stringify(this.to_dos));
    localStorage.setItem("TarefasDoing", JSON.stringify(this.doings));
    localStorage.setItem("TarefasDone", JSON.stringify(this.dones));
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    this.tarefa.titulo = "";
    this.tarefa.descricao = "";
    }
  }
  remover(codigo: number, decisao:number, objeto:Tarefa): void {
    this.tarefas.splice(this.tarefas.indexOf(objeto),1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    if( decisao == 1 ){
      this.to_dos.splice(codigo,1);
      localStorage.setItem("TarefasTodo", JSON.stringify(this.to_dos));
    }
    if( decisao == 2 ){
      this.doings.splice(codigo,1);
      localStorage.setItem("TarefasDoing", JSON.stringify(this.doings));
    }
     if( decisao == 3 ){
      this.dones.splice(codigo,1);
      localStorage.setItem("TarefasDone", JSON.stringify(this.dones));
     }
  }
  mudarCategoria(objeto:Tarefa): void {
    this.tarefas.splice(this.tarefas.indexOf(objeto),1);
    this.atualizarLista();
  }
  atualizarLista(){
    for( let i = 0 ; i < this.to_dos.length ; i++){
      this.to_dos.pop();
    }
    for( let i = 0 ; i < this.doings.length ; i++){
      this.doings.pop();
    }
    for( let i = 0 ; i < this.dones.length ; i++){
      this.dones.pop();
    }
    this.tarefas.forEach( (tarefa) => {
      if( tarefa.categoria == "To-Do"){
        this.to_dos.push(tarefa);
      }
      if( tarefa.categoria == "Doing"){
        this.doings.push(tarefa);
      }
      if( tarefa.categoria == "Done"){
        this.dones.push(tarefa);
      }
    });
    localStorage.setItem("TarefasTodo", JSON.stringify(this.to_dos));
    localStorage.setItem("TarefasDoing", JSON.stringify(this.doings));
    localStorage.setItem("TarefasDone", JSON.stringify(this.dones));
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
}
