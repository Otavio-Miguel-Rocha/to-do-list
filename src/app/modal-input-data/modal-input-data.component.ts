import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Propriedade {
  nome: string,
  tipoDeDado: 'Texto' | 'Número' | 'Seleção',
}

@Component({
  selector: 'app-modal-input-data',
  templateUrl: './modal-input-data.component.html',
  styleUrls: ['./modal-input-data.component.css']
})
export class ModalInputDataComponent implements OnInit {
  propriedadeNova: Propriedade = {
    nome: '',
    tipoDeDado: 'Texto'
  };
  constructor() { }

  ngOnInit() {
  }

  @Output()
  fecharModal = new EventEmitter();

  fecharModalInputData():void{
    this.fecharModal.emit();
  }


  //SELECT AND OPTIONS
  listaDeOpcoes: string[] = [];
  adicionarMaisUmaOpcao():void{
    this.listaDeOpcoes.push("");
  }
  teste():void{
    console.log('teste');
  }

  //CADASTRO
  cadastrarPropriedade():void{
    const novaPropriedade:Propriedade = {
      nome: this.propriedadeNova.nome,
      tipoDeDado: this.propriedadeNova.tipoDeDado,
    }
    console.log(novaPropriedade);
  }

}
