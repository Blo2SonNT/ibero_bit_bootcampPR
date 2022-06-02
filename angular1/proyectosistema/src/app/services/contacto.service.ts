import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    postContacto(){}

    putContacto(){}

    deleteContacto(){}
}
