import { Component, OnInit } from "@angular/core";

interface Categoria {
  nome: string;
  cor: string;
}

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"],
})
export class CategoriasComponent implements OnInit {
  ngOnInit() {
    let lista: Categoria[];
    lista = JSON.parse(localStorage.getItem("Categorias"));
    if (lista != null) {
      this.categorias = lista;
    }
  }
  categorias: Categoria[] = [];

  categoria: Categoria = {
    nome: "",
    cor: "",
  };

  cadastrarTarefa(): void {
    if (this.categoria.cor == "") {
      this.categoria.cor = "#000000";
    }
    const categoria: Categoria = {
      nome: this.categoria.nome,
      cor: this.categoria.cor,
    };
    let verificar: boolean = false;
    this.categorias.forEach((categoriaVerificar) => {
      if (categoriaVerificar.nome == this.categoria.nome) {
        verificar = true;
      }
    });
    if (verificar) {
      alert("As categorias não podem ter nomes iguais!");
    } else {
      this.categorias.push(categoria);
      this.setLocalStorage();
      this.categoria.nome = "";
    }
  }
  removerDaLista(indice: number): void {
    this.categorias.splice(indice, 1);
    this.setLocalStorage();
  }

  setLocalStorage(): void {
    localStorage.setItem("Categorias", JSON.stringify(this.categorias));
  }
}
