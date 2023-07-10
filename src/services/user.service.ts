import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/models/users/user";

@Injectable()
export class UserService {
  private menuInicialSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  menuInicial$ = this.menuInicialSubject.asObservable();

  constructor() {}

  setLoggedUser(user: User) {
    document.cookie = `UsuarioLogado=${JSON.stringify(user)};`;
    this.menuInicialSubject.next(false);
  }

  getLoggedUser(): User {
    const cookieValue = this.getCookieValue("UsuarioLogado");
    if (cookieValue) {
      this.menuInicialSubject.next(false);
      return JSON.parse(cookieValue);
    }
    this.menuInicialSubject.next(true);
    return null;
  }

  private getCookieValue(name: string): string | null {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
}