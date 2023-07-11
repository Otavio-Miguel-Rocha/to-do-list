import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { UserService } from "src/services/user.service";

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
    private userRepository: UserRepository,
    private userService: UserService
    ) {
  }

  ngOnInit() {
    if(this.userService.getLoggedUser() != null){
      this.router.navigate(['/Tarefas']);
    }
  }

  requestUsuario(): void{
    this.userRepository.getUser(this.user.id, this.user.password).subscribe(
      (user) => {
        // User login successful, do something
        console.log(user);
        this.userService.setLoggedUser(user);
        this.router.navigate(['/Tarefas']);
      },
      (error) => {
        // User login failed, handle error
        console.error(error);
      }
    );
  }
}
