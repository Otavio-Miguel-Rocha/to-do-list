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
    } else{
      this.categorias.push("To-Do");
      this.categorias.push("Doing");
      this.categorias.push("Done");
    }
  }
  categorias:string[] = [];
  
  cadastrarTarefa(categoria:string):void{
    this.categorias.push(categoria);
    localStorage.setItem('Categorias',JSON.stringify(this.categorias));
  }

}
