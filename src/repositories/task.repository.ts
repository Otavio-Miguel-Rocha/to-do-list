import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "src/services/user.service";
import { Task } from "src/models/tasks/taks";

const API_URL = "http://localhost:4300";

@Injectable()
export class TaskRepository {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
    ) { }
  public getTasks(): Observable<Task[]> {
    if(this.userService.checkLoggedUser){
        return this.httpClient.get<Task[]>(`${API_URL}/tarefas`);
    }
  }
}
