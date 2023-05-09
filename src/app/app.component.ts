import { Component, EventEmitter} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  openMenu: boolean = false;
  openMenuCategoryTest(): void {
    if( this.openMenu === true){
      this.openMenu = false;
    } else{
      this.openMenu = true;
    }
  }
}
