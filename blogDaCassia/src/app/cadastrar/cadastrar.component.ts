import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }
}
