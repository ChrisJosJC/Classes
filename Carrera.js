export default class Carrera {

    constructor(nombre = "",
        duracion = 4,
        maestros = [],
        asignaturas = [],
        estudiantes = []) {
        this.nombre = nombre
        this.duracion = duracion
        this.maestros = maestros
        this.asignaturas = asignaturas
        this.estudiantes = estudiantes
    }
    inscribir(estudiante) {
        this.estudiantes.push(estudiante)
    }
    getEstudiantes() {
        return this.estudiantes
    }
    getNombre() {
        return this.nombre
    }
    setNombre(nombre = "") {
        this.nombre = nombre
    }
    getMaestros() {
        return this.maestros
    }
    addMaestro(maestro) {
        this.maestros.push(maestro)
    }

}