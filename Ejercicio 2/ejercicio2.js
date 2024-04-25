let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

const operation = prompt("¿Que operacion desea realizar?")

if (operation === "suma"){
    alert(num1 + num2)
};

if (operation === "resta"){
    alert(num1 - num2)
};
if (operation === "multiplicacion"){
    alert(num1*num2)
};
if (operation === "division"){
    if(num2 === 0){
        alert("Syntax ERROR")
    }else{
        alert(num1/num2)
    };    
};










