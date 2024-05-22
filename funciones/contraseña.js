



function password(n){
    
    let contraseña =[];

    let random = undefined;
    
    let valores =["A","a","B","b","C","c","D","d","E","e","F","f","G","H","g","h","I","i","o","O","u","U","1","2","3","4","5","6","+","?","¿"];
   


   for(let i = 1;i<n;i++){
    random = valores[Math.floor(Math.random(n)*valores.length)];

    contraseña.push(random)
   }
   console.log(`Su contraseña es ${contraseña}`)
}

password(8);