import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
    providedIn: 'root'
})
export class ContactoService {

    url_api = 'http://localhost:4000/api';

    constructor( private http: HttpClient ) { }

    getContactos(): Observable<any>{
        return this.http.get(`${this.url_api}/obtener-lista-contactos`)
    }

    getContacto(){}

    postContacto(contactoFormulario: Contacto):Observable<any>{
        return this.http.post(`${this.url_api}/crear-contacto`, contactoFormulario)
    }

    putContacto(){}

    deleteContacto(id:String):Observable<any>{
        return this.http.delete(`${this.url_api}/borrar-contacto/${id}`)
    }
}
