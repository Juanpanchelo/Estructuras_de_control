let reloj ={
    marca: "casio",
    modelo: "2005",
    mostrarHora(marca, modelo){

        this.marca = marca
        this.modelo = modelo
        return `Es un reloj marca ${this.marca}, modelo ${this.modelo}, que muestra la hora actual que seria ${new Date()}`
    }
}

console.log(reloj.mostrarHora(this.marca, this.modelo));
