import { Component, OnInit } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { TesteService } from "src/services/teste.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "todo-list";

  private userId: string = "joao.silva";
  private users: User[] = [];
  user: User;

  constructor(
    private userRepository: UserRepository,
    private testeService: TesteService
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        console.log(value);
        this.users = value;
        this.user = this.getUsuarioLogado();
      },
    });
    testeService.getTema().subscribe({
      next: (tema) => {
        console.log(tema);
      },
    });
    //getter and setter
  }
  ngOnInit() {}

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId;
    }) as User;
  }
}
