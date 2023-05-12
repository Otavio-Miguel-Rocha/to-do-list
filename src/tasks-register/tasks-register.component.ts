import { Component } from "@angular/core";

interface Tarefa{
    titulo: string,
    descricao: string,
    categoria: string,
}

@Component({
    selector: 'app-tasksregister',
    template: '<app-register></app-register>'
})
export class TasksRegisterComponent{}