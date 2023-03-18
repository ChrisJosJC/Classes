/* 
TODO: Crear una clase carrera. (De carrera universitaria). 👌
TODO: Crear una clase persona. 👌
TODO: Crear una clase estudiante que herede de la clase persona. 👌

Estudiante tiene 5 propiedades privadas y persona tiene 3 propiedades  privadas.
*/

import Persona from './Persona.js'
import Estudiante from './Estudiante.js'
import Carrera from './Carrera.js'


// Funciones de la persona
let persona = new Persona("Franklin", "Demanche", 22)
console.log(persona.getNombre())
persona.setNombre("John")
persona.setApellido("Doe")
console.log(persona.getNombre(), persona.getApellido())

// Metodos de estudiantes
let estudiante = new Estudiante("John","Doe",20,4,"Ing. en sistemas")
console.log(estudiante.irAClases())
estudiante.setNombre("Mary")
console.log(estudiante.getNombre())
estudiante.setCarrera("Ing. en Software")
console.log(estudiante.getCarrera())
console.log(estudiante.getTiempoCursado())

// Funciones de Carrera 
let informatica = new Carrera("Ing. en Sistemas", 5, 
["Gamalier Reyes", "Dionicia Martinez"], 
["Desarrollo de aplicaciones web", "Implementacion de aplicaciones"])

console.log(informatica.getNombre())
informatica.setNombre("Ing. en Software")
console.log(informatica.getNombre())
informatica.addMaestro("Maria Elena")
console.log(informatica.getMaestros())

// Inscribir nuevo estudiante
informatica.inscribir("Franklin Demanche")
informatica.inscribir("Nathanael Polanco")
console.log(informatica.getEstudiantes())