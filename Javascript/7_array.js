/*


** NIVEL BASICO

E_1: Agregar elementos a un array usando push() y unshift():

Crea un array vacío y añade tres frutas al final usando push(). 
Luego añade dos frutas al inicio usando unshift().


E_2:   Eliminar elementos de un array con pop() y shift():

Dado el array ["manzana", "banana", "naranja", "pera"], elimina el primer
 y último elemento usando pop() y shift(). Muestra el array resultante.


 E_3:  Conversión de String a Array y Manipulación

 Instrucciones:

Toma el string "Hola Mundo de JavaScript".
Convierte el string en un array de palabras usando split().
Asegúrate de que cada palabra del array tiene la primera letra en mayúscula y el resto en minúsculas.
Une el array en un string separado por comas usando join().



E_4: Comprobar si un array contiene un elemento usando includes():
Dado el array ["auto", "moto", "bicicleta", "manzana", "pera","mate"], verifica si el array contiene el valor "moto".

E_5: Multiplicar todos los elementos de un array usando map():

Crea un array de números del 1 al 5. Usa map() para crear un nuevo array donde cada número esté multiplicado por 3.

E_6: Comprobar si todos los números son positivos con every():

Dado el array [5, 12, 8, 130, 44], usa every() para verificar si todos los números son mayores que 0.



**Nivel Intermedio: 

E_7:  Contar palabras largas y vocales usando forEach()
Consigna:

Dado el array ["sol", "luna", "estrella", "planeta", "galaxia"], usa forEach() para contar cuántas palabras tienen más de 5 letras.
Crea un nuevo array que contenga solo las palabras que tienen más de 5 letras.
Por cada palabra larga, cuenta cuántas vocales contiene.
Al final, muestra:
El número total de palabras largas.
El array con las palabras largas.
La cantidad de vocales en cada palabra larga.


E_8: Verificar elementos repetidos en un array con un bucle for y contar repeticiones
Consigna:

Dado el array ["rojo", "azul", "verde", "rojo", "amarillo", "azul"], usa un bucle for y la función includes() para verificar si hay 
colores repetidos.
Crea un objeto que cuente cuántas veces aparece cada color en el array.
Devuelve un array con los colores que están repetidos y el número de veces que se repiten.
Si no hay colores repetidos, devuelve un mensaje que lo indique.

E_9: ransformación avanzada de strings y arrays con split() y join()
Consigna:

Dado el string "Hola Mundo de JavaScript y de Programación", convierte la frase en un array de palabras usando split().
Recorre el array y agrega un sufijo a cada palabra que tenga más de 4 letras (por ejemplo, agrega -modificado al final de la palabra).
Luego, usa join() para convertir el array modificado en un string, uniendo las palabras con un guion (-).
Finalmente, muestra el nuevo string transformado.


**NIVEL AVANZADO

E_10: Crear una función que use arrays, condicionales y estructuras de control:

Crea una función que tome como argumento un array de nombres de estudiantes y sus calificaciones (un array de objetos). 
Usa estructuras de control (for, if) para contar cuántos estudiantes aprobaron (nota >= 6) y cuántos no.

RESOLUCION:

const estudiantes = [
  { nombre: "Juan", calificacion: 8 },
  { nombre: "Ana", calificacion: 5 },
  { nombre: "Carlos", calificacion: 7 },
  { nombre: "Lucía", calificacion: 4 }
];

function contarAprobados(estudiantes) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].calificacion >= 6) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  console.log(`Aprobados: ${aprobados}, Reprobados: ${reprobados}`);
}

contarAprobados(estudiantes);



E_11:  Ordenar y agrupar por propiedades
Descripción: Dado un array de objetos que representan productos en un inventario, 
escribe una función que ordene los productos por categoría y luego agrupe aquellos con precios superiores a un valor dado.

RESOLUCION: 

const inventario = [
  { producto: "Laptop", categoria: "Electrónica", precio: 800 },
  { producto: "Televisor", categoria: "Electrónica", precio: 500 },
  { producto: "Café", categoria: "Alimentos", precio: 10 },
  { producto: "Silla", categoria: "Muebles", precio: 120 },
  { producto: "Mesa", categoria: "Muebles", precio: 200 },
  { producto: "Pan", categoria: "Alimentos", precio: 2 }
];

function agruparProductos(inventario, precioMinimo) {
  let productosAgrupados = {};
  inventario.sort((a, b) => a.categoria.localeCompare(b.categoria));
  
  for (let i = 0; i < inventario.length; i++) {
    let categoria = inventario[i].categoria;
    if (!productosAgrupados[categoria]) {
      productosAgrupados[categoria] = [];
    }
    if (inventario[i].precio > precioMinimo) {
      productosAgrupados[categoria].push(inventario[i]);
    }
  }
  
  return productosAgrupados;
}

console.log(agruparProductos(inventario, 100));




E_12: Fusión de arrays sin duplicados
Descripción: Escribe una función que tome dos arrays de números y los fusione en uno solo, 
eliminando cualquier duplicado y ordenando el resultado en orden ascendente.

Resolucion:
function fusionarArrays(array1, array2) {
  let nuevoArray = [...array1, ...array2];
  let sinDuplicados = [];

  for (let i = 0; i < nuevoArray.length; i++) {
    if (!sinDuplicados.includes(nuevoArray[i])) {
      sinDuplicados.push(nuevoArray[i]);
    }
  }

  // Ordenar de menor a mayor
  sinDuplicados.sort((a, b) => a - b);
  return sinDuplicados;
}

const array1 = [5, 8, 12, 15, 5];
const array2 = [12, 19, 5, 3, 8];

console.log(fusionarArrays(array1, array2)); // Salida: [3, 5, 8, 12, 15, 19]



E_13: Matriz de objetos con operaciones múltiples
Descripción: Dado un array de objetos que representan estudiantes, crea una función que realice las siguientes operaciones:

Filtra a los estudiantes que tienen una calificación mayor o igual a 7.
Ordena a los estudiantes filtrados por apellido.
Devuelve un nuevo array con los nombres completos y la calificación de cada estudiante aprobado.

const estudiantes = [
  { nombre: "Juan", apellido: "Pérez", calificacion: 8 },
  { nombre: "Lucía", apellido: "Gómez", calificacion: 6 },
  { nombre: "Carlos", apellido: "Martínez", calificacion: 7 },
  { nombre: "Ana", apellido: "Torres", calificacion: 9 },
  { nombre: "Pedro", apellido: "Zárate", calificacion: 5 }
];

function procesarEstudiantes(estudiantes) {
  return estudiantes
    .filter(estudiante => estudiante.calificacion >= 7) // Filtrar aprobados
    .sort((a, b) => a.apellido.localeCompare(b.apellido)) // Ordenar por apellido
    .map(estudiante => ({
      nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`,
      calificacion: estudiante.calificacion
    })); // Crear nuevo array con nombres completos y calificaciones
}

console.log(procesarEstudiantes(estudiantes));

*/