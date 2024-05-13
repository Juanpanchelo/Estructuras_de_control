/**
 * Crear un arreglo de nombres de estudiantes y mostrar un mensaje si el arreglo está
vacío o si tiene al menos un estudiante
 */
let estudiantes = ["Juanjo", "Alison", "Sergio"]

if (estudiantes.length == 0){
    console.log("El arreglo esta vacio o no hay estudiantes");
}else{
    console.log("Hay", estudiantes.length , "estudiantes");
};


/**
 * Crear un arreglo de números enteros y calcular 
 * la suma de todos sus elementos
 * 
 */

let total=0
let numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++) total+=numeros[i];
console.log(total);


/**
 * Crear un arreglo de objetos que representen productos (nombre, precio, stock) y
mostrar el nombre y el precio del primer producto.
 */


let productos = [
    {
        id: 1,
        name: "Leche",
        stock: 10,

    }
,
    {
        id: 2,
        name: "Caja de Huevos",
        stock: 20,
    }
,
    {
        id: 3,
        name: "Gomitas",
        stock: 10,
    }
]

console.log(productos[0])

