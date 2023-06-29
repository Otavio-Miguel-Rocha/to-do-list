import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/models/users/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = "http://localhost:4300/usuarios";

@Injectable()
export class UserRepository {
  constructor(private httpClient: HttpClient) {}
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL).pipe(
      map((values) => {
        const users: User[] = [];
        for (const value of values) {
          users.push(Object.assign(new User(), value));
        }
        return users;
      })
    );
  }
  public getUser(id: string, password: string): Observable<User> {
    const loginData = { id, password };
    return this.httpClient.post<User>(`${API_URL}`, loginData);
  }
}
