import { Component, OnInit } from "@angular/core";
import { User } from "src/models/users/user";

@Component({
  selector: "app-tarefas",
  templateUrl: "./tarefas.component.html",
  styleUrls: ["./tarefas.component.css"],
})
export class TarefasComponent implements OnInit {
  usuario: User;
  constructor() {

  }

  ngOnInit() {
  }






  //Funcionalidades do usuário Tarefas
  adicionarTarefa():void{
    if(this.validaPermissaoTarefa("Add")){

      this.abrirModalCadastrarDados();
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
   return this.usuario.cardPermissions.some( permissao => permissao == permissaoVerificada);
  }
  //
  //Funcionalidades do usuário propriedades
  adicionarPropriedade():void{
    if(this.validaPermissaoPropriedade("Add")){
      this.abrirModalCadastrarDados();
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
   return this.usuario.propertiesPermissions.some( permissao => permissao == permissaoVerificada);
  }

  //Modais
  modalCadastrarDados:boolean = false;
  abrirModalCadastrarDados():void{
    this.modalCadastrarDados = true;
  }
  fecharModalCadastrarDados():void{
    this.modalCadastrarDados = false;
  }
}
