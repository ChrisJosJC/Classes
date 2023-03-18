import Persona from './Persona.js'


export default class Estudiante extends Persona {
    constructor(nombre = "",
        apellido = "",
        age = 16,
        semestre = 0,
        carrera = "") {
        super(nombre, apellido, age)
        this.semestre = semestre
        this.carrera = carrera
    }

    irAClases(){
        return "Estoy de camino a la universidad!"
    }
    getCarrera() {
        return this.carrera
    }
    setCarrera(carrera = "") {
        this.carrera = carrera
    }
    pasarSemestre(){
        this.semestre+=1
    }
    getTiempoCursado(){
        return this.semestre * 6
    }
}