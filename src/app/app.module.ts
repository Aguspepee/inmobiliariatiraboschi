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
import { FormsModule } from '@angular/forms';

//Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat'; //Angular Fire 7.0 agrega "compat" a la ruta
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  //Angular Fire 7.0 agrega "compat" a la ruta
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
    FormsModule,
    NgbModule,
     //Esta inicialización funciona es del AngularFire 7.0
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    AngularFirestoreModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
