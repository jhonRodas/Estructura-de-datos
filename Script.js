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

//console.log(usuario)

usuario.carrera ="ing de sistemas"
console.log (usuario)


//delete usuario.trabaja
console.log(usuario)

 console.log(usuario.hasOwnProperty(`nombre`))
 console.log(usuario.hasOwnProperty(`apellido`))
 
 //usuario.saludar()



 // Clase Producto
 class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    // Método para actualizar la cantidad
    actualizarCantidad(nuevaCantidad) {
      this.cantidad = nuevaCantidad;
    }
  
    // Método para mostrar la información del producto
    informacion() {
      return `Nombre: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Cantidad: ${this.cantidad}`;
    }
  }
  
  // Clase Tienda
  class Tienda {
    constructor() {
      this.productos = [];
    }
  
    // Método para agregar un producto
    agregarProducto(nombre, precio, cantidad) {
      const nuevoProducto = new Producto(nombre, precio, cantidad);
      this.productos.push(nuevoProducto);
    }
  
    // Método para actualizar la cantidad de un producto
    actualizarCantidadProducto(nombre, nuevaCantidad) {
      const producto = this.productos.find((prod) => prod.nombre.toLowerCase() === nombre.toLowerCase());
      if (producto) {
        producto.actualizarCantidad(nuevaCantidad);
        console.log(`Cantidad actualizada para ${nombre}. Nueva cantidad: ${nuevaCantidad}`);
      } else {
        console.log(`Producto '${nombre}' no encontrado en la tienda.`);
      }
    }
  
    // Método para mostrar la información de todos los productos
    mostrarInformacionProductos() {
      if (this.productos.length === 0) {
        console.log("No hay productos en la tienda.");
      } else {
        this.productos.forEach((producto) => {
          console.log(producto.informacion());
        });
      }
    }
  }
  
  // Ejemplo de uso
  const tienda = new Tienda();
  tienda.agregarProducto("Manzana", 0.5, 100);
  tienda.agregarProducto("Banana", 0.3, 150);
  
  // Mostrar información de productos
  tienda.mostrarInformacionProductos();
  
  // Actualizar la cantidad de un producto
  tienda.actualizarCantidadProducto("Manzana", 120);
  
  // Mostrar información actualizada de productos
  tienda.mostrarInformacionProductos();