import { Component, OnInit } from "@angular/core";
import { Option } from "src/models/properties/options/options";
import { User } from "src/models/users/user";

@Component({
  selector: "app-tarefas",
  templateUrl: "./tarefas.component.html",
  styleUrls: ["./tarefas.component.css"],
})
export class TarefasComponent implements OnInit {
  usuario: User;
  constructor(
  ) {

  }

  ngOnInit() {
  }






  //Funcionalidades do usuário Tarefas
  adicionarTarefa():void{
    if(this.validaPermissaoTarefa("Add")){

      this.abrirModalCadastrarDados("Adicionar Nova Tarefa");
      console.log("Pode Mover");
    }
  }
  editarTarefa():void{
    if(this.validaPermissaoTarefa("Edit")){
      console.log("Pode Editar");
    }
  }
  moverTarefa():void{
    if(this.validaPermissaoTarefa("Move")){
      console.log("Pode Mover");
    }
  }
  removerTarefa():void{
    if(this.validaPermissaoTarefa("Remove")){
      console.log("Pode Remover");
    }
  }
  validaPermissaoTarefa(permissaoVerificada:string):boolean{
  //  return this.usuario.cardPermissions.some( permissao => permissao == permissaoVerificada);
    return true;
  }
  //
  //Funcionalidades do usuário propriedades
  adicionarPropriedade():void{
    if(this.validaPermissaoPropriedade("Add")){
      this.abrirModalCadastrarDados("Adicionar Nova Propriedade");
      console.log("Pode Mover");
    }
  }
  editarPropriedade():void{
    if(this.validaPermissaoPropriedade("Edit")){
      console.log("Pode Editar");
    }
  }
  removerPropriedade():void{
    if(this.validaPermissaoPropriedade("Remove")){
      console.log("Pode Remover");
    }
  }
  validaPermissaoPropriedade(permissaoVerificada:string):boolean{
  //  return this.usuario.propertiesPermissions.some( permissao => permissao == permissaoVerificada);
    return true;
  }

  //Modais
  modalCadastrarDados:boolean = false;
    //Informações Modais
    tituloModal: string;
  abrirModalCadastrarDados(titulo: string):void{
    this.tituloModal = titulo;
    this.modalCadastrarDados = true;
  }
  fecharModalCadastrarDados():void{
    this.modalCadastrarDados = false;
  }
  //Funções Modais
    //Caixas de Seleção
    tipoDadoTexto:boolean;
    tipoDadoNumero:boolean;
    tipoDadoSelecao:boolean;
    atualizarTipoDadoPropriedade(tipoDado:string):void{
      if(tipoDado == 'Texto' && !this.tipoDadoTexto){
        this.tipoDadoTexto = true;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = false;
      } else if( tipoDado == 'Numero' && !this.tipoDadoNumero){
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = true;
        this.tipoDadoSelecao = false;
      } else if ( tipoDado == 'Selecao' && !this.tipoDadoSelecao){
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = true;
      } else{
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = false;
      }
    }
    //
    //Opção de Tipo de Dado: Seleção
    listaOpcoesSelecao: Option[] = [];
    adicionarOpcaoSelecaoPropriedade():void{
      this.listaOpcoesSelecao.push(new Option());
    }
    removerOpcaoSelecaoPropriedade(opcao:Option):void{
      console.log(opcao);
      console.log(this.listaOpcoesSelecao.indexOf(opcao));
      console.log(this.listaOpcoesSelecao);
      this.listaOpcoesSelecao.splice(
        this.listaOpcoesSelecao.indexOf(opcao),1
      )
      console.log(this.listaOpcoesSelecao);
    }

  

}
