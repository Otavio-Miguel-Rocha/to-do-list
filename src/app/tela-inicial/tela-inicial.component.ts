import { Component, OnInit } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Component({
  selector: "app-tela-inicial",
  templateUrl: "./tela-inicial.component.html",
  styleUrls: ["./tela-inicial.component.css"],
})
export class TelaInicialComponent implements OnInit {
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
  constructor(private userRepository: UserRepository) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value;
        console.log(this.users);
      },
    });
  }

  ngOnInit() {}

  requestUsuario(): void{
    this.userRepository.getUser(this.user.id, this.user.password).subscribe(
      (user) => {
        // User login successful, do something
        console.log(user);
      },
      (error) => {
        // User login failed, handle error
        console.error(error);
      }
    );
  }
}
