/*Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch*/


const funcionProblematica = ()=>{
  throw new Error("solo doy problemas")
}

try{
  let error = funcionProblematica()
  console.log(error)
} catch( e ){
  console.log(e)
  console.log("Otra vez esa función problemática")
}