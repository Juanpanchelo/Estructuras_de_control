let accion = prompt("Iniciar secuencia?")

if (accion === "si"){
    while(accion === "si"){
        num = Math.floor((Math.random()*11)+2-1)
        num1 = Math.floor((Math.random()*11)+2-1)
        num2 = Math.floor((Math.random()*11)+2-1)
        num3 = Math.floor((Math.random()*11)+2-1)
        num4 = Math.floor((Math.random()*11)+2-1)
        num5 = Math.floor((Math.random()*11)+2-1)
        num6 = Math.floor((Math.random()*11)+2-1)
        num7 = Math.floor((Math.random()*11)+2-1)
        num8 = Math.floor((Math.random()*11)+2-1)
        num9 = Math.floor((Math.random()*11)+2-1)
        console.log(num)
        console.log(num2)
        console.log(num3)
        console.log(num4)
        console.log(num5)
        console.log(num6)
        console.log(num7)
        console.log(num8)
        console.log(num9)
        accion = prompt("Reiniciar secuencia?")
    }
    alert("SECUENCIA TERMINADA")
}else{
    alert("SECUENCIA TERMINADA")
}