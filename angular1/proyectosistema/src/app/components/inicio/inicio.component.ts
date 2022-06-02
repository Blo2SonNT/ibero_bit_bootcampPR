import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
        console.log(this.contactoForm)
    }

}
