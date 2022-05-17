import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoUsuarioComponent } from './components/contacto-usuario/contacto-usuario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "contacto", component: ContactoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
