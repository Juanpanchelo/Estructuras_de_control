let coche ={
    marca: "Twingo",
    modelo: "2005",
    arrancar(marca ,modelo){
        this.marca = marca
        this.modelo = modelo
        return `La marca del auto es ${this.marca}, modelo ${this.modelo}`
    },
};


console.log(coche.arrancar(coche.marca,coche.modelo));