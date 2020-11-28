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
// Para manejar/trabajar los formularios de manera reactiva.(formularios reactivos).
import { ReactiveFormsModule } from '@angular/forms';
// Para hacer peticiones HTTP es necesario importar ClientModule.
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './Pages/user-card/user-card.component';
import { SearchComponent } from './Pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormularioComponent,
    NavbarComponent,
    HomeComponent,
    UserCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
