/* let persona ={
    nombre: "John",
    apellido:"Connor",
    edad: 16,
}
console.log(persona)


let persona100 = new Object();
persona.nombre = "Samantha";
persona.apellido = "Ramirez";
persona.edad = 34;

console.log(persona);


class Persona{
    constructor(nombre ,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, Me llamo ${this.nombre}`)
    } 
}

let Juanjo = new Persona("Juanjo", 18);

console.log(Juanjo);
Juanjo.saludar();


 */
function Persona(nombre, edad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

let persona1 = new Persona("Tomas", 18, "Ciclista");
let persona2 = new Persona("Sebas", 18, "Arquitecto");


console.log(persona1);
console.log(persona1.nombre);
console.log(persona2.nombre);






