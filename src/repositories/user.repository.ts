import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/models/users/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = "http://localhost:4300";

@Injectable()
export class UserRepository {
  constructor(private httpClient: HttpClient) { }
  public getUsers(): Observable<User[]> {
    let usuarioLogado: User = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado != null) {
      return this.httpClient.get<User[]>(`${API_URL}/usuarios`).pipe(
        map((values) => {
          const users: User[] = [];
          for (const value of values) {
            users.push(Object.assign(new User(), value));
          }
          return users;
        })
      );
    } else{
      console.log("Usuario Não Logado");
    }
  }
  public getUser(id: string, password: string): Observable<User> {
    const loginData = { id, password };
    return this.httpClient.post<User>(`${API_URL}/valida-usuario-existente`, loginData);
  }
  public postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(API_URL, user);
  }
}
