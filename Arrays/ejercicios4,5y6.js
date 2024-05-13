/**
 * Crear un arreglo de ciudades y agregar una nueva ciudad al final del arreglo cada vez
que el usuario la ingrese.
 */

//let city = ["Medellin","Ciudad de Mexico","New York City"]

//while( city !== null){
  //  let User = prompt("Desea agregar una ciudad?")
//if (User === "si"){
   // let nueva = prompt("Agregue nueva ciudad")
   // city.push(nueva)
    //console.log(city)
//}else if(User !== "si"){
  //alert("Operacion finalizada")
//}else{
//    alert("Operacion finalizada")
//}

//}
//alert("Operacion fincalizada")

/**
 * Crear un arreglo de compras y agregar un nuevo producto (nombre, precio) al final del
arreglo cada vez que el usuario lo ingrese.
 */

//let compras = ["Papas", "Gaseosas", "Platano"]

//while(compras !== null){
    //let newie = prompt("Que desea agregar?")
//if (newie === "nada"){
    //alert("Gracias por hacer su lista")
   // break;
//}else{
    //compras.push(newie)
    //console.log(compras)
//}
//}
//alert("Operacion finalizada")


/**
 * Crear un arreglo de tareas pendientes y agregar una nueva tarea al final del arreglo
cada vez que el usuario la ingrese
 */

let tasks = ["barrer", "trapear"]
console.log(tasks)
while(tasks !== null){
    let taski = prompt("Alguna otra tarea?")
if (taski === "no"){
    alert("Tareas agendadas con exito")
    break;
}else{
    tasks.push(taski)
    console.log(tasks)
}
}
alert("Operacion finalizada")