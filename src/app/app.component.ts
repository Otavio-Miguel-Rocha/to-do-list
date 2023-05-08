import { Component, EventEmitter, Input, Output } from "@angular/core";

interface Tarefa {
  codigo: number;
  titulo: string;
  descricao: string;
  categoria: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @Input()
  tarefa = {};

  @Output()
  alertTasks = new EventEmitter();

  registerTask(tarefa: Tarefa): void {
    this.alertTasks.emit(tarefa);
  }
}
