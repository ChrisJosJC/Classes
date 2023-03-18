
export default class Persona {

    constructor(nombre = "",
        apellido = "",
        age = 16) {
        this.nombre = nombre
        this.apellido = apellido
        this.age = age
    }
    cumplirAños() {
        this.estudiantes += 1
    }
    getNombre() {
        return this.nombre
    }
    setNombre(nombre = "") {
        this.nombre = nombre
    }
    getApellido() {
        return this.apellido
    }
    setApellido(apellido = "") {
        this.apellido = apellido
    }
    getAge() {
        return this.age
    }

}