let seriesFavoritas = ["Doctor Who", "Game of Thrones", 1, 2, true, false]
console.log(seriesFavoritas[1])
console.log(seriesFavoritas.length)
console.log(seriesFavoritas[seriesFavoritas.length - 1])

// Modificar elementos de un arreglo

seriesFavoritas[1] = "Fast n' Furious";
seriesFavoritas[seriesFavoritas.length - 1] = "Hola";
console.log(seriesFavoritas);


//Recorres un arreglo

const paises = ["Colombia", "México", "Perú", "Argentina"];
for (let i = 0; i < paises.length; i++) {
    console.log(paises (i))
}

//Agregar elemento al arreglo

let colores = ["Amarillo", "Azul" , "Rojo"]

console.log(colores)

colores.push("Verde")

console.log(colores)


// Añadir objetos que proporcione un usuario a un array
// por corregir

const nombres = [];
let nuevoNombre;
while (nuevoNombre !== "null") {
nuevoNombre = prompt("Ingrese un nombre (o escriba 'null' para terminar): ");
if (nuevoNombre !== "null ") {
nombres.push(nuevoNombre);
}
}
console.log("Nombres ingresados:", nombres);


// retornar el ultimo objeto de un array y quitarlo del mismo

const numeros = [1, 2, 3];
console.log(numeros)

numeros.push(4, 5, 6)
console.log(numeros)


console.log(numeros.pop())

console.log(numeros)

