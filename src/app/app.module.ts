import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importaciones de componentes = pages
import { AppComponent } from './app.component';
import { UsersComponent } from './Pages/users/users.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { NavbarComponent } from './Pages/shared/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';

// Importar RouterModule de @angular/router.
import { RouterModule } from '@angular/router';
// Importar la clase creada en el archivo app.routes
import { routes } from './app.routes';
// Para trabajar con formularios.
import { FormsModule } from '@angular/forms';
// Para hacer peticiones HTTP es necesario importar ClientModule.
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormularioComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
