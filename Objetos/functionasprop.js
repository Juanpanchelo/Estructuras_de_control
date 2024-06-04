let persona ={
    nombre:"Trevor",
    edad: 55,

}

function cumplirAños(n){
      n++;
    return `Su edad el proximo año sera de ${n}`;
};


console.log(`La edad de ${persona.nombre} es de ${persona.edad}`);
console.log(cumplirAños(persona.edad));