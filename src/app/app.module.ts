import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './Pages/users/users.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
