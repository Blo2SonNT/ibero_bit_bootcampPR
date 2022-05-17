import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoUsuarioComponent } from './components/contacto-usuario/contacto-usuario.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        ContactoUsuarioComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
