let año = parseFloat(prompt("Ingrese el año"))

if (año % 4 == 0){
    if (año % 100 != 0){
        alert("Es año bisiesto")
    }else if(año % 400 == 0){
        alert("Es año bisiesto")       
    }else{
        alert("No es año bisiesto")
    }
}else{
    alert("No es año bisiesto")
}
