import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-contacto-usuario',
    templateUrl: './contacto-usuario.component.html',
    styleUrls: ['./contacto-usuario.component.css']
})
export class ContactoUsuarioComponent implements OnInit {

    contactoForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    regexNumero = /^[0-9]+$/;

    constructor(private fb: FormBuilder) {
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
        console.log(this.contactoForm);
    }

}
