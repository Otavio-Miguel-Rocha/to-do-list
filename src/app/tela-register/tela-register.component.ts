import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-tela-register',
  templateUrl: './tela-register.component.html',
  styleUrls: ['./tela-register.component.css']
})
export class TelaRegisterComponent implements OnInit {

  user: User = {
    id: "",
    name: "",
    password: "",
    email: "",
  };
  constructor(
    private userRepository: UserRepository
  ) { }

  ngOnInit() {
  }


  
  postUsuario(): void {
    console.log(this.user);
    const novoUsuario: User = {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
    }
    this.userRepository.postUser(novoUsuario)
      .subscribe(
        usuarioNovo => {
          console.log(usuarioNovo + "Cadastrado");
        },
        (erro: any) => {
          console.log(erro);
        }
      )
  }
}
