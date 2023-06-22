import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-cadastrar-dados',
  templateUrl: './modal-cadastrar-dados.component.html',
  styleUrls: ['./modal-cadastrar-dados.component.css']
})
export class ModalCadastrarDadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  fecharModalAtual = new EventEmitter();

  fecharModal():void{
    this.fecharModalAtual.emit();
  }
}
