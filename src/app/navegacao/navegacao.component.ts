import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {
  menuInicial: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.menuInicial$.subscribe((value) => {
      this.menuInicial = value;
    });
  }
}