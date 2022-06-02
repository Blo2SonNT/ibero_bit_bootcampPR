export class Contacto{
    _id?: string;
    correo: string;
    nombre: string;
    direccion: string;
    ciudad: string;
    mensaje: string;
    edad: number;

    constructor(correo:string, nombre:string, direccion:string, ciudad:string, mensaje:string, edad:number){
        this.correo = correo
        this.nombre = nombre
        this.direccion = direccion
        this.ciudad = ciudad
        this.mensaje = mensaje
        this.edad = edad
    }
}
