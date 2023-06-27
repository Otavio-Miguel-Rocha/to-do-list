import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Option } from "src/models/properties/options/options";
import { Property } from "src/models/properties/properties";
import { User } from "src/models/users/user";

@Component({
  selector: "app-tarefas",
  templateUrl: "./tarefas.component.html",
  styleUrls: ["./tarefas.component.css"],
})
export class TarefasComponent implements OnInit {
  usuario: User;
  listaPropriedades: Property[] = [];
  constructor() {}

  ngOnInit() {
    let listaPropriedadeValidacoes: Property[] = JSON.parse(
      localStorage.getItem("Propriedades")
    );
    if (listaPropriedadeValidacoes != null) {
      this.listaPropriedades = listaPropriedadeValidacoes;
    } else{
      const propriedadeFixa:Property = {
        id: "id_1",
        name: "Nome",
        typeOfData: "String",
      }
      this.listaPropriedades.push(propriedadeFixa);
      this.setPropriedades();
    }
  }

  //Funcionalidades do usuário Tarefas
  adicionarTarefa(): void {
    if (this.validaPermissaoTarefa("Add")) {
    
      console.log("Pode Mover");
    }
  }
  editarTarefa(): void {
    if (this.validaPermissaoTarefa("Edit")) {
      console.log("Pode Editar");
    }
  }
  moverTarefa(): void {
    if (this.validaPermissaoTarefa("Move")) {
      console.log("Pode Mover");
    }
  }
  removerTarefa(): void {
    if (this.validaPermissaoTarefa("Remove")) {
      console.log("Pode Remover");
    }
  }
  validaPermissaoTarefa(permissaoVerificada: string): boolean {
    //  return this.usuario.cardPermissions.some( permissao => permissao == permissaoVerificada);
    return true;
  }
  //
  //Funcionalidades do usuário propriedades
  adicionarPropriedade(): void {
    if (this.validaPermissaoPropriedade("Add")) {
      this.modalCadastrarNovaPropriedade = true;
      console.log("Pode Mover");
    }
  }
  editarPropriedade(): void {
    if (this.validaPermissaoPropriedade("Edit")) {
      this.modalEditarPropriedade = true;
      console.log("Pode Editar");
    }
  }
  removerPropriedade(): void {
    if (this.validaPermissaoPropriedade("Remove")) {
      console.log("Pode Remover");
    }
  }
  validaPermissaoPropriedade(permissaoVerificada: string): boolean {
    //  return this.usuario.propertiesPermissions.some( permissao => permissao == permissaoVerificada);
    return true;
  }

  //Modais
  modalCadastrarNovaPropriedade: boolean = false;
  modalEditarPropriedade:boolean = false;

  fecharModal(): void {
    this.modalCadastrarNovaPropriedade = false;
    this.modalEditarPropriedade = false;
  }
  //Funções Modais
  
    //Nova Propriedade
    propriedadeASerCadastrada: Property = new Property();
    //Caixas de Seleção
    tipoDadoTexto: boolean;
    tipoDadoNumero: boolean;
    tipoDadoSelecao: boolean;
    atualizarTipoDadoPropriedade(tipoDado: string): void {
      if (tipoDado == "Texto" && !this.tipoDadoTexto) {
        this.tipoDadoTexto = true;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = false;
      } else if (tipoDado == "Numero" && !this.tipoDadoNumero) {
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = true;
        this.tipoDadoSelecao = false;
      } else if (tipoDado == "Selecao" && !this.tipoDadoSelecao) {
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = true;
      } else {
        this.tipoDadoTexto = false;
        this.tipoDadoNumero = false;
        this.tipoDadoSelecao = false;
        this.listaOpcoesSelecao = [];
      }
    }
    //
    //Opção de Tipo de Dado: Seleção
    listaOpcoesSelecao: Option[] = [];
    adicionarOpcaoSelecaoPropriedade(): void {
      this.listaOpcoesSelecao.push(new Option());
    }
    removerOpcaoSelecaoPropriedade(opcao: Option): void {
      this.listaOpcoesSelecao.splice(this.listaOpcoesSelecao.indexOf(opcao), 1);
    }
    cadastrarPropriedadeNova(): void {
      if (this.validacoesCamposCadastroPropriedades(this.propriedadeASerCadastrada)) {
        this.propriedadeASerCadastrada.id = this.gerarID();
        const novaPropriedade:Property = {
          id: this.propriedadeASerCadastrada.id,
          name: this.propriedadeASerCadastrada.name,
          typeOfData: this.propriedadeASerCadastrada.typeOfData,
        }
        this.listaPropriedades.push(novaPropriedade);
        this.setPropriedades();
        this.propriedadeASerCadastrada.id = "";
        this.propriedadeASerCadastrada.name = "";
        this.propriedadeASerCadastrada.typeOfData = "";
        this.atualizarTipoDadoPropriedade("Limpar");
        this.fecharModal();
      }
    }
    validacoesCamposCadastroPropriedades(propriedadeValidacao:Property): boolean {
      //Nome
      if (propriedadeValidacao.name == "") {
        console.log("Nome deve ser preenchido");
        return false;
      }
      //
      //Tipo de Dados
      if (this.tipoDadoTexto) {
        this.propriedadeASerCadastrada.typeOfData = "String";
        return true;
      } else if (this.tipoDadoNumero) {
        this.propriedadeASerCadastrada.typeOfData = "Number";
        return true;
      } else if (this.tipoDadoSelecao) {
        this.propriedadeASerCadastrada.typeOfData = JSON.stringify(this.listaOpcoesSelecao);
        return true;
      } else {
        console.log("É necessário escolher algum paramêtro de dados");
        return false;
      }
      //
    }
    gerarID(): string {
      const ultimaPropriedade = this.listaPropriedades[this.listaPropriedades.length - 1];
      let id = 0;
      if (ultimaPropriedade) {
        const limpaString = /(\d+)$/;
        const idEncontrada = limpaString.exec(ultimaPropriedade.id);
        if (idEncontrada) {
          id = parseInt(idEncontrada[0]);
        }
      }
      const novoID = (id + 1).toString();
      return `id_${novoID}`;
    }
  //Editar Propriedade
  propriedadeEmEdicao: Property;
  edicaoOuCadastroPropriedade: boolean = false;
  editarPropriedadeExistente(posicao:number):void{
    this.edicaoOuCadastroPropriedade = true;
    this.propriedadeEmEdicao = this.listaPropriedades[posicao];
    console.log(this.propriedadeEmEdicao);
    this.atualizarTipoDadoPropriedade(this.propriedadeEmEdicao.typeOfData.toString());
    this.modalEditarPropriedade = false;
    this.modalCadastrarNovaPropriedade = true;
  }
  confirmarEdicaoPropriedade():void{
    if(this.validacoesCamposCadastroPropriedades(this.propriedadeEmEdicao)){
      this.listaPropriedades.forEach((propriedade) => {
        if(propriedade.id == this.propriedadeEmEdicao.id){
          console.log("entrei");
          propriedade = this.propriedadeEmEdicao;
          console.log(propriedade);
          console.log(this.listaPropriedades);
        }
      });
      this.setPropriedades(); 
      this.edicaoOuCadastroPropriedade = false;
    }
  }


//LOCAL STORAGE (FUTURA API)
setPropriedades():void{
  localStorage.setItem("Propriedades",JSON.stringify(this.listaPropriedades));
}
}
