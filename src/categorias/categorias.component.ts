import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  ngOnInit() {
    let lista:string[];
    lista = JSON.parse(localStorage.getItem('Categorias'));
    if( lista != null ){
      this.categorias = lista;
    }
  }
  categorias:string[] = [];
  
  cadastrarTarefa(categoria:string):void{
    this.categorias.push(categoria);
    this.setLocalStorage();
  }
  removerDaLista(indice:number):void{
    this.categorias.splice(indice,1);
    this.setLocalStorage();
  }

  setLocalStorage():void{
    localStorage.setItem('Categorias',JSON.stringify(this.categorias));
  }

}
