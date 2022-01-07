import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AddproductComponent } from './Pages/addproduct/addproduct.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { QuienessomosComponent } from './Components/quienessomos/quienessomos.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetailComponent } from './Components/detail/detail.component';

//Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddproductComponent,
    BannerComponent,
    ServiciosComponent,
    ProductosComponent,
    QuienessomosComponent,
    ContactoComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AngularFireModule.initializeApp(environment.firebase), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
