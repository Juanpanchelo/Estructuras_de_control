let empresa ={
    nombre: "Juanjo Tecnologies",
    direccion:{
        calle: "30-15",
        direccion:"Al lado de las empanadas",
    },
    empleados:["Susana", "Gerald","Antonio"]
};



console.log(`El nombre de la empresa es ${empresa.nombre}, su direccion es ${empresa.direccion.calle},${empresa.direccion.direccion}, y su primera empleada es ${empresa.empleados[0]}`);