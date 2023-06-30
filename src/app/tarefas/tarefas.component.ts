import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Option } from "src/models/properties/options/options";
import { Property } from "src/models/properties/properties";
import { Task } from "src/models/tasks/taks";
import { User } from "src/models/users/user";

@Component({
  selector: "app-tarefas",
  templateUrl: "./tarefas.component.html",
  styleUrls: ["./tarefas.component.css"],
})
export class TarefasComponent implements OnInit {
  usuario: User;
  listaPropriedades: Property[] = [];
  listaTarefas: Task[] = [];
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    let user : User = JSON.parse(localStorage.getItem("usuarioLogado"));
    if(user == null){
      this.router.navigate(['/Login'])
    }


    let listaPropriedadeValidacoes: Property[] = JSON.parse(
      localStorage.getItem("Propriedades")
    );
    if (listaPropriedadeValidacoes != null) {
      this.listaPropriedades = listaPropriedadeValidacoes;
    } else {
      const propriedadeFixa: Property = {
        id: "id_1",
        name: "Nome",
        typeOfData: "String",
      };
      this.listaPropriedades.push(propriedadeFixa);
      this.setPropriedades();
    }
    let listaTarefas: Task[] = JSON.parse(localStorage.getItem("Tarefas"));
    //continuar recolhimento das tarefas;
  }

  //Funcionalidades do usuário Tarefas
  adicionarTarefa(): void {
    if (this.validaPermissaoTarefa("Add")) {
      this.abrirModalCadastrarTarefa();
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
  modalEditarPropriedade: boolean = false;

  fecharModal(): void {
    this.modalCadastrarNovaPropriedade = false;
    this.modalEditarPropriedade = false;
    this.modalCadastrarTarefa = false;
    this.edicaoOuCadastroPropriedade = false;
    this.listaOpcoesSelecao = [];
  }
  //Funções Modais

  //Nova Propriedade
  propriedadeASerCadastrada: Property = new Property();
  //Caixas de Seleção
  tipoDadoTexto: boolean;
  tipoDadoNumero: boolean;
  tipoDadoSelecao: boolean;
  atualizarTipoDadoPropriedade(tipoDado: string | Option[] | number): void {
    if (tipoDado == "String" && !this.tipoDadoTexto) {
      this.tipoDadoTexto = true;
      this.tipoDadoNumero = false;
      this.tipoDadoSelecao = false;
    } else if (tipoDado == "Number" && !this.tipoDadoNumero) {
      this.tipoDadoTexto = false;
      this.tipoDadoNumero = true;
      this.tipoDadoSelecao = false;
    } else if (
      (Array.isArray(tipoDado) || tipoDado == "Select") &&
      !this.tipoDadoSelecao
    ) {
      if (Array.isArray(tipoDado)) {
        this.listaOpcoesSelecao = tipoDado;
      }
      this.tipoDadoTexto = false;
      this.tipoDadoNumero = false;
      this.tipoDadoSelecao = true;
    } else {
      this.tipoDadoTexto = false;
      this.tipoDadoNumero = false;
      this.tipoDadoSelecao = false;
    }
  }
  //
  //Opção de Tipo de Dado: Seleção
  listaOpcoesSelecao: Option[] = [];
  adicionarOpcaoSelecaoPropriedade(): void {
    const novaOpcao = new Option();
    novaOpcao.name = "";
    novaOpcao.color = "#FFFFFF";
    this.listaOpcoesSelecao.push(novaOpcao);
  }
  removerOpcaoSelecaoPropriedade(opcao: Option): void {
    this.listaOpcoesSelecao.splice(this.listaOpcoesSelecao.indexOf(opcao), 1);
  }
  cadastrarPropriedadeNova(): void {
    if (
      this.validacoesCamposCadastroPropriedades(this.propriedadeASerCadastrada)
    ) {
      this.propriedadeASerCadastrada.id = this.gerarID(this.listaPropriedades);
      const novaPropriedade: Property = {
        id: this.propriedadeASerCadastrada.id,
        name: this.propriedadeASerCadastrada.name,
        typeOfData: this.propriedadeASerCadastrada.typeOfData,
      };
      this.listaPropriedades.push(novaPropriedade);
      this.setPropriedades();
      this.propriedadeASerCadastrada.id = "";
      this.propriedadeASerCadastrada.name = "";
      this.propriedadeASerCadastrada.typeOfData = "";
      this.atualizarTipoDadoPropriedade("Limpar");
      this.fecharModal();
    }
  }
  validacoesCamposCadastroPropriedades(
    propriedadeValidacao: Property
  ): boolean {
    //Nome
    console.log(propriedadeValidacao);
    if (propriedadeValidacao.name == "") {
      console.log("Nome deve ser preenchido");
      return false;
    }
    //
    //Tipo de Dados
    if (this.tipoDadoTexto) {
      propriedadeValidacao.typeOfData = "String";
      return true;
    } else if (this.tipoDadoNumero) {
      propriedadeValidacao.typeOfData = "Number";
      return true;
    } else if (this.tipoDadoSelecao) {
      propriedadeValidacao.typeOfData = this.listaOpcoesSelecao;
      return true;
    } else {
      console.log("É necessário escolher algum paramêtro de dados");
      return false;
    }
    console.log(propriedadeValidacao);
    //
  }
  gerarID(lista: Property[] | Task[]): string {
    const ultimoElemento = lista[lista.length - 1];
    let id = 0;
    if (ultimoElemento) {
      const limpaString = /(\d+)$/;
      const idEncontrada = limpaString.exec(ultimoElemento.id);
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
  editarPropriedadeExistente(posicao: number): void {
    this.edicaoOuCadastroPropriedade = true;
    this.propriedadeEmEdicao = this.listaPropriedades[posicao];
    this.atualizarTipoDadoPropriedade(this.propriedadeEmEdicao.typeOfData);
    this.modalEditarPropriedade = false;
    this.modalCadastrarNovaPropriedade = true;
  }
  confirmarEdicaoPropriedade(): void {
    if (this.validacoesCamposCadastroPropriedades(this.propriedadeEmEdicao)) {
      this.listaPropriedades.forEach((propriedade) => {
        if (propriedade.id == this.propriedadeEmEdicao.id) {
          const propriedadeEditada: Property = {
            id: this.propriedadeEmEdicao.id,
            name: this.propriedadeEmEdicao.name,
            typeOfData: this.propriedadeEmEdicao.typeOfData,
          };
          propriedade = propriedadeEditada;
        }
      });
      this.setPropriedades();
      this.fecharModal();
    }
  }

  //Cadastrar Tarefa
  modalCadastrarTarefa: boolean = false;
  tarefaSendoCadastrada: Task;
  abrirModalCadastrarTarefa(): void {
    this.tarefaSendoCadastrada = new Task();
    this.tarefaSendoCadastrada.properties = this.listaPropriedades;
    this.modalCadastrarTarefa = true;
  }
  verificaArray(array: any): boolean {
    return Array.isArray(array);
  }
  cadastrarNovaTarefa(): void {
    // const novaTarefa: Task = {
    //   id: this.gerarID(this.listaTarefas),
    // };
    console.log(this.tarefaSendoCadastrada.properties);
  }

  //LOCAL STORAGE (FUTURA API)
  setPropriedades(): void {
    localStorage.setItem(
      "Propriedades",
      JSON.stringify(this.listaPropriedades)
    );
  }
}
