import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class TesteService {

    //importar o tema de um componente ao outro;
    tema = new BehaviorSubject("Escuro");

    getTema(): Observable<string> {
        return this.tema.asObservable();
    }
    setTema(valor: string): void {
        this.tema.next(valor);
    }

}