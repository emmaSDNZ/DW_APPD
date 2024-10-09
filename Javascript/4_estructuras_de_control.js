/*

**Nivel Básico:

Ejercicio 1_Número par o impar:

Solicita al usuario un número.
Utiliza el operador módulo (%) para determinar si el número es par o impar.
Imprime un mensaje indicando el resultado.

Ejercicio 2_Mayor de dos números:

Solicita al usuario dos números.
Compara los números utilizando una estructura if...else y determina cuál es el mayor.
Imprime el resultado.

Ejercicio 3_Calculadora simple:

Solicita al usuario dos números y una operación (+, -, *, /).
Utiliza una estructura switch para realizar la operación correspondiente.
Imprime el resultado.


** Nivel Intermedio:

Ejercicio 4_Tabla de multiplicar:

Solicita al usuario un número.
Utiliza un bucle while para imprimir la tabla de multiplicar de ese número hasta el 10.

Ejercicio 5_Adivina el número:

Genera un número aleatorio entre 1 y 100.
Solicita al usuario que adivine el número.
Utiliza un bucle while para repetir la solicitud hasta que el usuario acierte.
Imprime mensajes indicando si el número ingresado es mayor, menor o igual al número secreto.


Ejercicio 6_Números primos:

Solicita al usuario un número.
Utiliza un bucle for y una estructura if para determinar si el número es primo.
Imprime un mensaje indicando si el número es primo o no.



** Nivel Avanzado (opcional):

Ejercicio 7_Piramide de números:

Solicita al usuario un número que represente la altura de la pirámide.
Utiliza bucles anidados para imprimir una pirámide de números.


Ejercicio 8_Juego del ahorcado:

Elige una palabra al azar.
Crea un array para representar las letras de la palabra, inicialmente ocultas.
Solicita al usuario que ingrese letras.
Utiliza bucles y estructuras condicionales para actualizar el estado del juego y verificar si el usuario ha adivinado la palabra.

Ejercicio 9_Ordenamiento de números:
Solicita al usuario una lista de números.
Utiliza bucles anidados y estructuras condicionales para ordenar los números de menor a mayor (por ejemplo, utilizando el algoritmo de burbuja).
Consejos:

Divide el problema en partes más pequeñas: Al enfrentar problemas complejos, descompónlos en tareas más simples y resuélvelas una por una.
Utiliza variables descriptivas: Elige nombres de variables que reflejen su propósito para mejorar la legibilidad del código.
Indenta correctamente tu código: La indentación adecuada facilita la lectura y comprensión del código.
Comenta tu código: Agrega comentarios para explicar las diferentes partes del código y su lógica.



Resolucion: Ordenamiento de números:
let numeros = prompt("Introduce una lista de números separados por comas:").split(",").map(Number);

// Algoritmo de burbuja para ordenar los números de menor a mayor
for (let i = 0; i < numeros.length; i++) {
  // Bucle interno para comparar cada par de elementos
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    // Intercambiar los números si están en el orden incorrecto
    if (numeros[j] > numeros[j + 1]) {
      // Variable temporal para realizar el intercambio
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

// Imprimir el array ordenado
console.log("Números ordenados de menor a mayor: " + numeros);


Resolucion: Número par o impar
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}

*/