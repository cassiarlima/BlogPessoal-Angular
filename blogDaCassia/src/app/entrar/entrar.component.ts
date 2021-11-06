import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  UserLogin: UserLogin = new UserLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.UserLogin).subscribe((resp: UserLogin) => {
      this.UserLogin = resp

      environment.token = this.UserLogin.token
      environment.nome = this.UserLogin.nome
      environment.foto = this.UserLogin.foto
      environment.id = this.UserLogin.id

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert("Usuário ou senha estão incorretos!")
      }
    })
  }
}
