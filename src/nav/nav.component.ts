import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent {

  @Output()
  openMenuCategory = new EventEmitter();

  openCategory():void{
    this.openMenuCategory.emit();
  }
}
