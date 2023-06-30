import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
  selector: "app-tela-login",
  templateUrl: "./tela-login.component.html",
  styleUrls: ["./tela-login.component.css"],
})
export class TelaLoginComponent implements OnInit {
  users: User[];
  user: User = {
    id: "",
    name: "",
    password: "",
    email: "",
    groups: [],
    cardPermissions: [],
    propertiesPermissions: [],
  };
  constructor(
    private router:Router,
    private userRepository: UserRepository
    ) {
  }

  ngOnInit() {
    let user:User = JSON.parse(localStorage.getItem("usuarioLogado"));
    if(user != null){
      this.router.navigate(['/Tarefas']);
    }

  }

  requestUsuario(): void{
    this.userRepository.getUser(this.user.id, this.user.password).subscribe(
      (user) => {
        // User login successful, do something
        console.log(user);
        localStorage.setItem("usuarioLogado", JSON.stringify(user));
        this.router.navigate(['/Tarefas']);
      },
      (error) => {
        // User login failed, handle error
        console.error(error);
      }
    );
  }
}
