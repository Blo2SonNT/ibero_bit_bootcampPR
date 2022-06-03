import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    contactoForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    regexNumero = /^[0-9]+$/;

    constructor(private fb: FormBuilder, private _contactoService: ContactoService, private router: Router) {
        this.contactoForm = this.fb.group({
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            nombre: ['', Validators.required],
            direccion: ['', [Validators.required, Validators.minLength(5)]],
            edad: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            ciudad: ['', [Validators.required]],
            mensaje: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {
    }

    guardarContacto(){
        const contactoUsuario: Contacto = {
            correo: this.contactoForm.get('correo')?.value,
            nombre: this.contactoForm.get('nombre')?.value,
            direccion: this.contactoForm.get('direccion')?.value,
            ciudad: this.contactoForm.get('ciudad')?.value,
            mensaje: this.contactoForm.get('mensaje')?.value,
            edad: this.contactoForm.get('edad')?.value
        }
        console.log(contactoUsuario)

        this._contactoService.postContacto(contactoUsuario).subscribe(data=>{
            this.router.navigate(['/mensaje-enviado'])
        }, error => {
            console.log(error)
        })

    }

}
