import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    listaContactos: Contacto[] = []

    constructor( private _contactoService: ContactoService ) { }

    ngOnInit(): void {
        this.obtenerContactos();
    }

    obtenerContactos(){
        this._contactoService.getContactos().subscribe( dataGatito => {
            console.log(dataGatito)
            this.listaContactos = dataGatito
        }, error => {
            console.log(error)
        })
    }

}
