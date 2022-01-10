import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService) { }

  Ingresar() {
    console.log("Ingreso", this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => console.log("se inició sesión", res));
  }
  ngOnInit(): void {
  }

}
