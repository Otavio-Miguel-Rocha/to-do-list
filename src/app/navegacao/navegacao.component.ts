import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let user: User = JSON.parse(localStorage.getItem("usuarioLogado"));
    if(user != null){
      this.menuInicial = false;
    } else{
      this.menuInicial = true;
    }

  }

  //Opções Logado e Deslogado
  menuInicial:boolean;
}
