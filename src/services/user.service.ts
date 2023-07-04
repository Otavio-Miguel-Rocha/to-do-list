import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";

@Injectable()
export class UserService {
    constructor() {}
    setLoggedUser(user:User) {
        localStorage.setItem("UsuarioLogado", JSON.stringify(user));
    }
    getLoggedUser() : User {
        return JSON.parse(localStorage.getItem("UsuarioLogado"));
    }
}