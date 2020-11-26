import { Routes } from '@angular/router';
// Importaciones de componentes = pages
import { UsersComponent } from './Pages/users/users.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { HomeComponent } from './Pages/home/home.component';

// Exportar una constante que será nuestro arreglo de rutas (paths)
export const routes: Routes = [
   // { path: '', component: }
   // Rutas
   {path: 'home', component: HomeComponent},
   {path: 'form', component: FormularioComponent},
   {path: 'users', component: UsersComponent},
   {path: '', pathMatch: 'full', redirectTo: 'home'}
];
