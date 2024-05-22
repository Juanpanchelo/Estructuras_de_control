function IMC(peso, altura){
    let imc = peso/(altura**2)
    if(imc < 18.5){
        console.log(`Su imc es de ${imc}, por ende tiene peso insuficiente`)
    }else if(imc > 18.5 && imc < 24.9){
        console.log(`Su imc es de ${imc}, y posee un peso ideal y saludable`)
    }else if (imc >= 25.0 && imc < 29.9){
        console.log(`Su imc es de ${imc}, se encuentra en un rango de sobrepeso `)
    }else{
        console.log(`Su imc es de ${imc}, se encuentra en un rango de obesidad`)
    }

}

IMC(60 , 1.70);