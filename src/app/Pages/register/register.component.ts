import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario={
    email: "",
    password: ""
  };

  constructor(private authService:AuthService ) { }

  Registrarse(){
    console.log("Registro",this.usuario);
    const{email, password}=this.usuario;
    this.authService.register(email,password).then(res=>console.log("se registro",res));
  }

  ngOnInit(): void {
  }

}
