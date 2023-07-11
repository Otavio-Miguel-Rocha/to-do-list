import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { UserService } from 'src/services/user.service';

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
    private userRepository: UserRepository,
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit() {
    if(this.userService.getLoggedUser() != null){
      this.router.navigate(['/Tarefas']);
    }
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
