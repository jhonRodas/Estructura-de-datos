// Hello world 
// Estoy Feliz
// cotrol + k + c = comentario
// const array = [1,2,3,4,5] 
// console.log ("Recorrer un array con for")
// for (let i = 0; i < array.length; i++) {console.log(array[i]);}


// const arreglo = [1,2,3,4,5]
// array.push(8)
// array.unshift(20)


const usuario = {
    nombre: "carlos",
    edad : 25,
    trabaja: true,

    saludar () {
        console.log(`Hola,mi nombre es ${this.nombre} es y tengo ${this.edad}años`);
    }
     
}
console.log(usuario)

usuario.carrera ="ing de sistemas"
console.log (usuario)


delete usuario.trabaja
console.log(usuario)

 console.log(usuario.hasOwnProperty(`nombre`))
 console.log(usuario.hasOwnProperty(`apellido`))

 usuario.saludar()
 